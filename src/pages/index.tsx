import { FormEvent, useState } from "react";
import { isUrlValid, getStatusLabelColor } from '@/utils/utils';


const CloneRepo: React.FC = () => {
    const [repoUrl, setRepoUrl] = useState<string>("");
    const [localPath, setLocalPath] = useState<string>("");
    const [cloneStatus, setCloneStatus] = useState<string>("");
    const [createStatus, setCreateStatus] = useState<string>("");
    const [pushStatus, setPushStatus] = useState<string>("");
    // Clone the repository from the given url
    const cloneRepo = async () => {
        setCloneStatus("Pending...");

        const response = await fetch("/api/clone", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: repoUrl,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setCloneStatus("Clone successful!");

            setLocalPath(data.localPath);
            console.log("Clone successful:", data);
        } else {
            setCloneStatus(data.error || "Clone failed!");
            console.error("Clone error:", data);
        }
    };
    // Create a file in the repository
    const createFile = async () => {
        setCreateStatus("Pending...");

        const response = await fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                localPath: localPath,
            }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            setCreateStatus("Create file successful!");
            console.log("Create file successful:", data);
        } else {
            setCreateStatus("Create file failed!");
            console.error("Create file error:", data);
        }
    };
    // Push the changes to the repository
    const pushChanges = async () => {
        setPushStatus("Pending...");

        const response = await fetch("/api/push", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                localPath: localPath,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setPushStatus("Push changes successful!");
            console.log("Push changes successful:", data);
        } else {
            setPushStatus("Push changes failed!");
            console.error("Push changes error:", data);
        }
    };
    //Conditionally disable the buttons
    const isCloneDisabled = !isUrlValid(repoUrl) || cloneStatus === "Pending...";
    const isCreateDisabled = !localPath || createStatus === "Pending...";
    const isPushDisabled = !localPath || pushStatus === "Pending...";

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <form className="p-6 bg-white rounded shadow-md w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-4">Clone a Repository</h2>

                <div className="mb-4">
                    <label
                        htmlFor="repoUrl"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Repo URL
                    </label>
                    <input
                        type="url"
                        id="repoUrl"
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        required
                        className={`mt-1 block w-full py-2 px-3 border ${
                            isUrlValid(repoUrl) ? "border-gray-300" : "border-red-500"
                        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {!isUrlValid(repoUrl) && (
                        <p className="mt-2 text-sm text-red-600" id="email-error">
                            Please enter a valid URL.
                        </p>
                    )}
                </div>

                <button
                    type="button"
                    onClick={cloneRepo}
                    disabled={isCloneDisabled}
                    className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                    text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500 mb-4 ${
                        isCloneDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Clone
                </button>

                <button
                    type="button"
                    onClick={createFile}
                    disabled={isCreateDisabled}
                    className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                    text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-green-500 mb-4 ${
                        isCreateDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Create File
                </button>

                <button
                    type="button"
                    onClick={pushChanges}
                    disabled={isPushDisabled}
                    className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                    text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-blue-500 ${
                        isPushDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Push Changes
                </button>
                <div className="mt-4">
                    <p className={`text-sm ${getStatusLabelColor(cloneStatus)}`}>Clone Status: {cloneStatus}</p>
                    <p className={`text-sm ${getStatusLabelColor(createStatus)}`}>Create File Status: {createStatus}</p>
                    <p className={`text-sm ${getStatusLabelColor(pushStatus)}`}>Push Status: {pushStatus}</p>
                </div>
            </form>
        </div>
    );
};


export default CloneRepo;

import { FormEvent, useState } from "react";

const CloneRepo: React.FC = () => {
    const [repoUrl, setRepoUrl] = useState<string>("");

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

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
            console.log("Success:", data);
        } else {
            console.error("Error:", data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                Repo URL:
                <input
                    type="url"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Clone</button>
        </form>
    );
};

export default CloneRepo;

import { AvatarCreatorViewer } from "@readyplayerme/rpm-react-sdk"
import { useState } from "react"

const loadingNode = (
    <div
        style={{
            height: "100%",
            width: "100%",
            color: "orange",
            backgroundColor: "rebeccapurple",
            textAlign: "center",
            marginTop: 100,
        }}
    >
        Loading Avatar
    </div>
)

export default function App() {
    const [url, setUrl] = useState("")
    const [id, setId] = useState("")

    const handleAvatarExported = (url) => {
        setUrl(url)
    }

    const handleUserSet = (id) => {
        setId(id)
    }

    return (
        <div className="App">
            <div className="container">
                <AvatarCreatorViewer
                    subdomain="na-1oykbj.readyplayer.me?frameApi"
                    onAvatarExported={handleAvatarExported}
                    onUserSet={handleUserSet}
                    editorConfig={{
                        bodyType: "fullbody",
                        clearCache: true,
                    }}
                    viewerConfig={{
                        shadows: true,
                        style: {
                            backgroundColor: "rebeccapurple",
                        },
                    }}
                    loadingNode={loadingNode}
                />
            </div>
        </div>
    )
}

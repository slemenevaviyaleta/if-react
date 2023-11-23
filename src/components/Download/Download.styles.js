import {createUseStyles} from "react-jss";

const DownloadStyles = {
    download: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
    }
}

export const useDownloadStyles = createUseStyles(DownloadStyles, {name: 'Download'})
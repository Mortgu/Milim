import "./EditorDetailSidebar.scss";

const EditorDetailSidebar = () => {
    return (
        <div className="editor-detail-sidebar">
            <div className="sidebar-head">
                <svg  className="sidebar-head-icon" width="58" height="48" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V43C0 45.7614 2.23858 48 5 48H36V0H5ZM39 0V48H53C55.7614 48 58 45.7614 58 43V5C58 2.23858 55.7614 0 53 0H39Z" fill="rgba(255, 255, 255, .5)"/>
                    <path d="M22.1159 32.1854L20.7274 30.8292L26.1524 25.4042H9.16699V23.4667H26.1524L20.6951 18.0094L22.0837 16.6531L29.8659 24.4354L22.1159 32.1854Z" fill="black"/>
                </svg>
            </div>
        </div>
    )
}

export default EditorDetailSidebar;
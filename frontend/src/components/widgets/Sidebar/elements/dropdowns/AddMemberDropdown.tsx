import SendIcon from "@material-ui/icons/Send";

const AddMemberDropdown = () => {
    return (
        <div className="input-buttonIcon">
            <input  ref={input => input && input.focus()}  className="input" type="text" placeholder="Enter Name..." />
            <button>
                <SendIcon />
            </button>
        </div>
    )
}

export default AddMemberDropdown;
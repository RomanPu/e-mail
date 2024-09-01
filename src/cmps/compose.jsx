import { emailService } from "../services/email.service"

export function Compose({onFinish, onChange, mail}){

  function onClicked(com){
    onFinish(com, mail)
  }

  function handleChange({ target }) {
    let { name, value, type } = target
        console.log(name, value)
        onChange({...mail,[name]:value})
}

  return (
    <div className="compose-modal-overlay">
      <div className="compose-modal">
        <div className="compose-modal-header">
          <h2>New Message</h2>
          <button className="close-button" onClick={() => onClicked("close")}>X</button>
        </div>
        <div className="compose-modal-body">
          <input type="text" onChange={handleChange} value={mail.to} placeholder="To" name ="to" className="compose-input" />
          <input type="text" onChange={handleChange} value={mail.subject} placeholder="Subject" name ="subject" className="compose-input" />
          <textarea value={mail.body} onChange={handleChange} placeholder="Compose your email" name ="body" className="compose-textarea"></textarea>
        </div>
        <div className="compose-modal-footer">
          <button className="send-button" onClick={() => onClicked("send")}>Send</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";

function Modal() {
  return (
    <div>
      <label for="my-modal-2" class="btn btn-primary modal-button">open modal</label> 
      <input type="checkbox" id="my-modal-2" class="modal-toggle" /> 
      <div class="modal">
        <div class="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p> 
          <div class="modal-action">
            <label for="my-modal-2" class="btn btn-primary">Accept</label> 
            <label for="my-modal-2" class="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default Modal;
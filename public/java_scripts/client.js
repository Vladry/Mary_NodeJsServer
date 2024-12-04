const selectTargetEl = document.getElementById("selectTarget");
selectTargetEl.addEventListener('change', ()=>{
    btnCallEl.value = `Позвонить ${selectTargetEl.value} ?`;
});
const btnCallEl = document.getElementById("btnCall");
btnCallEl.addEventListener('click', () => {
    call(selectTargetEl.value);
});

const ws = new WebSocket('wss://localhost:3003');

ws.onopen = () => {
    const msg = {type: 'register', payload: clientId};
    ws.send(JSON.stringify(msg));
    console.log("websocket connected. Sent to server:  msg = ", msg);
};

const call = (targetId) => {
    const msg = {type: "initiate", clientId: clientId, targetId: targetId};
    ws.send(JSON.stringify(msg));
    console.log(`звоним абоненту ${targetId}`);
    console.log(`ws: initiate from ${clientId} to ${targetId}`);
}


let data;
self.onmessage = (e) => {

    data = e.data;
    var numberData = Number(data);

    for (let i = 0; i < numberData; i++) {

        if (i % 4 === 0) {
            self.postMessage(i);
        }


    }
    self.postMessage("SUCESSFULLY COMPLETED");

}
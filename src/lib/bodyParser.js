function bodyParser (request){
    return new Promise((resolve, reject)=>{
        let totaldata='';

        request
            .on('data', chunk =>{
                totaldata += chunk;
            })
            .on('end', () =>{
                request.body = JSON.parse(totaldata);
                resolve();
            })

            .on('error', err =>{
                console.log(err);
                reject();
            })


    })

}

module.exports = { bodyParser }

const listar = (req,res,model) => {
    model.find().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err)
    })
}

const agregar = (req, res, model) => {
    const data = new model(req.body)

    data.save().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err)
    })
}

const modificar = (req,res, model) => {
    const { id } = req.params;
    model.findOne({ _id: id }).then((data) => {
        console.log(id, data)
    
        if(!data) { res.status(400).send({message: "No encontrado"})}
    
        Object.assign(data, req.body)
        data.save().then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            res.status(400).send(err)
        })
    })
}

const borrar = (req,res, model) => {
    const { id } = req.params;

    model.deleteOne({_id: id}).then((result) => {
        res.status(200).send("Se elimino correctamente")
    }).catch((err) => {
        res.status(400).send(err)
    })

}

module.exports = { listar, agregar, modificar, borrar }
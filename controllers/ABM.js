
const listar = (req,res,model) => {
    model.find().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send({message: err.message})
    })
}

const listarUno = (req,res,model) => {
    const { id } = req.params;

    model.findOne({_id: id}).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.status(400).send({message: err.message})
    })
}

const agregar = (req, res, model) => {
    const data = new model(req.body)

    data.save().then((result) => {
        res.status(201).json({message: "Agregado correctamente"});
    }).catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const modificar = (req,res, model) => {
    const { id } = req.params;
    model.findOne({ _id: id }).then((data) => {
        console.log(id, data)
    
        if(!data) { res.status(400).send({message: "No encontrado"})}
    
        Object.assign(data, req.body)
        data.save().then((result) => {
            res.status(200).send({message: "Modificado correctamente"})
        }).catch((err) => {
            res.status(400).send({message: err.message})
        })
    })
}

const borrar = (req,res, model) => {
    const { id } = req.params;

    model.deleteOne({_id: id}).then((result) => {
        res.json({message: "Se elimino correctamente"})
        res.status(200).send("Eliminado")
    }).catch((err) => {
        res.status(400).send({message: err.message})
    })

}

module.exports = { listar, listarUno, agregar, modificar, borrar }
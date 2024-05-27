const listar = (req,res,model) => {
    model.find().then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const listarRelacionados = (req,res,model) => {
    const { categoria } = req.params
    const query = { categorias: categoria };
    
    model.find(query).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const listarUno = (req,res,model) => {
    const { id } = req.params;

    model.findOne({_id: id}).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const agregar = (req, res, model) => {
    const data = new model(req.body)

    data.save().then((result) => {
        res.status(201).json({message: "Se ha agregado correctamente"});
    }).catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const modificar = (req,res, model) => {
    const { id } = req.params;
    model.findOne({ _id: id }).then((data) => {
        if(!data) { res.status(400).json({message: "No encontrado"})}
    
        Object.assign(data, req.body)
        data.save().then((result) => {
            res.status(200).json({message: "Se ha modificado correctamente"})
        }).catch((err) => {
            res.status(400).json({message: err.message})
        })
    })
}

const borrar = (req,res, model) => {
    const { id } = req.params;

    model.deleteOne({_id: id}).then((result) => {
        res.status(200).json({message: "Se ha eliminado correctamente!"})
    }).catch((err) => {
        res.status(400).json({message: err.message})
    })

}

module.exports = { listar, listarRelacionados, listarUno, agregar, modificar, borrar }
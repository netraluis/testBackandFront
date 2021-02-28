const expSub = require('../db/expSub')

exports.getAllExpedients = async (req, res, next) => {

    const expedients = await expSub.readAllExpedients()
    
    res.status(200).json({
      status: 'success',
      result: 'ok',
      data: {
        expedients
      },
    });
};

exports.getExpedient = async (req, res, next) => {
    
    const expedient = await expSub.readExpedient(req.params.id)
    
    res.status(200).json({
      status: 'success',
      result: 'ok',
      data: {
        expedient
      },
    });
};

exports.createExpedient = async(req, res) => {
    const expedient = await expSub.createExpedient(req.body)
    
    res.status(201).json({
      status: 'success',
      result: 'ok',
      data: 
        expedient
      ,
    });
}

exports.getAllSubstitutes = async (req, res, next) => {

    const substitutes = await expSub.readAllSubstitutes()
    
    res.status(200).json({
      status: 'success',
      result: 'ok',
      data: {
        substitutes
      },
    });
};


exports.getSubstitut  = async (req, res, next) => {
    
    const substitut = await expSub.readSubstitutes(req.params.id)
    
    res.status(200).json({
      status: 'success',
      result: 'ok',
      data: {
        substitut
      },
    });
};

exports.createSubstitut = async(req, res) => {
    const substitut = await expSub.createSubstitutes(req.body)
    
    res.status(201).json({
      status: 'success',
      result: 'ok',
      data: 
      substitut
      ,
    });
}
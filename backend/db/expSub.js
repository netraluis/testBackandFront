var fs = require('fs');  


exports.readAllExpedients = async () => {
   try{
      const allExpedients = await fs.promises.readFile(`${__dirname}/expSubData.json`) 
      const json = JSON.parse(allExpedients.toString());
      return json.expedients

   }catch(error) { 
      res.status(404).json({
             status: 'fail',
             message: error,
           });
   }
}

exports.readExpedient = async (id) => {
   try{
      const allExpedients = await fs.promises.readFile(`${__dirname}/expSubData.json`) 
      const json = JSON.parse(allExpedients.toString());
      return json.expedients.find(expedient=> expedient.id*1 === id*1) || null

   }catch(error) { 
      res.status(404).json({
         status: 'fail',
         message: error,
       });
   }
}

exports.createExpedient = async (data) =>{
   try { 
      const allExpedients = await fs.promises.readFile(`${__dirname}/expSubData.json`) 
      const json = JSON.parse(allExpedients.toString());
      const expedients = json.expedients
      const expedientsId = expedients[expedients.length-1].id*1 + 1;
      const newExpedient = {id:expedientsId,...data }
      json.expedients[expedients.length] = newExpedient

      await require('fs').promises.writeFile( 
         `${__dirname}/expSubData.json`, JSON.stringify(json)) 
         return newExpedient
         
  } catch (err) { 
      res.status(404).json({
         status: 'fail',
         message: error,
       });
  } 

}

exports.readAllSubstitutes = async () => {
   try{
      const allSubstitutes = await fs.promises.readFile(`${__dirname}/expSubData.json`) 
      const json = JSON.parse(allSubstitutes.toString());
      return json.substitutes

   }catch(error) { 
      res.status(404).json({
         status: 'fail',
         message: error,
       });
   }
}

exports.readSubstitutes = async (id) => {
   try{
      const allSubstitutes = await fs.promises.readFile(`${__dirname}/expSubData.json`) 
      const json = JSON.parse(allSubstitutes.toString());
      return json.substitutes.find(expedient=> expedient.id*1 === id*1) || null

   }catch(error) { 
      res.status(404).json({
         status: 'fail',
         message: error,
       });
   }
}

exports.createSubstitutes = async (data) =>{
   try { 
      const allSubstitutes = await fs.promises.readFile(`${__dirname}/expSubData.json`) 
      const json = JSON.parse(allSubstitutes.toString());
      const substitutes = json.substitutes
      const substitutesId = substitutes[substitutes.length-1].id*1 + 1;
      const newExpedient = {id:substitutesId,...data }
      json.substitutes[substitutes.length] = newExpedient

      await require('fs').promises.writeFile( 
         `${__dirname}/expSubData.json`, JSON.stringify(json)) 
         return newExpedient
         
  } catch (err) { 
      res.status(404).json({
         status: 'fail',
         message: error,
       });
  } 

}


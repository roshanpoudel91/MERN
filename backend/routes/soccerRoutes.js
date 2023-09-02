import {addNewPlayer,
    getPlayers,
    getPlayerById,
    updatePlayerById,
    deletePlayer
} 
from '../controllers/playerControllers';

const routes = (app)=>{
    
    app.route('/players')
    // GET endpoint
    .get(getPlayers)

    //post endpoint
    .post(addNewPlayer);

    app.route('/players/:PlayerId')
        .get(getPlayerById)
        .put(updatePlayerById)
        
        .delete(deletePlayer);
   
}

export default routes;
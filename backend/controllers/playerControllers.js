import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (req, res) => {
    try {

        const newPlayer = new Player(req.body);
        const savedPlayer = await newPlayer.save();
        res.json(savedPlayer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getPlayers = async (req, res) => {
    try {

        const players = await Player.find({});
        // const savedPlayer = await newPlayer.save();
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getPlayerById = async (req, res) => {
    try {

        const players = await Player.findById(req.params.PlayerId);
        // const savedPlayer = await newPlayer.save();
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const updatePlayerById = async (req, res) => {
    try {

        const players = await Player.findOneAndUpdate({_id: req.params.PlayerId},req.body,{new:true});
        // const savedPlayer = await newPlayer.save();
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deletePlayer = async (req, res) => {
    try {

         await Player.findOneAndDelete({_id: req.params.PlayerId});
        // const savedPlayer = await newPlayer.save();
        res.json({message:'Successfully deleted player'});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
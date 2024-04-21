import { Schema, model } from "mongoose";
import { Player } from "@/types/player";
import { ExceptionError } from "@/models/Exception_Model";
const PlayerSchema: Schema<Player> = new Schema({
  firstName: {
    type: String,
    required: [true, ExceptionError.NAME_ERROR],
    minlength: 4,
    maxlength: 30,
    trim: true,
  },
});

const Players = model("Player", PlayerSchema);
module.exports = Players;

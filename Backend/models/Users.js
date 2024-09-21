import mongoose from 'mongoose';

// Schéma pour les Clients
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// Export des modèles
export const Client = mongoose.model('Client', clientSchema);

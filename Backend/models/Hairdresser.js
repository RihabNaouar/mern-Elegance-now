import mongoose from 'mongoose';
// Schéma pour les Coiffeurs
const hairdresserSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      specialty: {
        type: String,
        required: true,
        enum: ['Coupe', 'Coloration', 'Brushing', 'Lissage', 'Autre'], // Spécialité du coiffeur
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
    },
    { timestamps: true }
  );
  // Export des modèles
  export const Hairdresser = mongoose.model('Hairdresser', hairdresserSchema);

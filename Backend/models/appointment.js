import mongoose from 'mongoose';

// Schéma pour les Rendez-vous
const appointmentSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Types.ObjectId,
      ref: 'Client', // Référence au modèle Client
      required: true,
    },
    hairdresser: {
      type: mongoose.Types.ObjectId,
      ref: 'Hairdresser', // Référence au modèle Coiffeur
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
      enum: ['Coupe', 'Coloration', 'Brushing', 'Lissage', 'Autre'], // Types de services offerts
    },
    status: {
      type: String,
      required: true,
      enum: ['En attente', 'Confirmé', 'Annulé'], // Statut du rendez-vous
      default: 'En attente',
    },
    price: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      required: false, // Note facultative
    },
  },
  { timestamps: true } // Ajoute createdAt et updatedAt
);
// Export des modèles
export const Appointment = mongoose.model('Appointment', appointmentSchema);
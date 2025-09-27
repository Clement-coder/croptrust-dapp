"use client";

import { X, AlertTriangle } from "lucide-react";

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationModal({ message, onConfirm, onCancel }: ConfirmationModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative p-8 bg-white rounded-2xl shadow-lg w-[90%] max-w-md">
        <button onClick={onCancel} className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Confirm Deletion</h2>
        </div>
        <p className="text-gray-600 mb-8">{message}</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onCancel} className="px-6 py-3 font-bold text-gray-600 bg-gray-200/50 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-6 py-3 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

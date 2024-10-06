"use client";
import React, { useEffect, useState } from 'react';
import StudentPredictionsTable from '@/components/StudentPredictionsTable';

const StudentPredictionsContainer = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await fetch('/api/get-predictions');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        console.log("DATA is", data); // Confirm structure here
        setPredictions(data);
      } catch (err) {
        console.error("Error fetching predictions:", err); // Log the error
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <StudentPredictionsTable data={predictions} />;
};

export default StudentPredictionsContainer;

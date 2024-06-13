const ExerciseList = ({ exercises }) => {
    return (
      <div>
        {exercises.map((exercise) => (
          <div key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <img src={exercise.imageUrl} alt={exercise.name} />
          </div>
        ))}
      </div>
    );
  };
  
/**
 * @typedef {Object} Exercise
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} category
 * @property {string} equipment
 * @property {string[]} musclesWorked
 * @property {string} imageUrl
 * @property {string} videoUrl
 */

/**
 * @typedef {Object} Workout
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {Exercise[]} exercises
 * @property {string} category
 * @property {number} duration
 * @property {string} level
 */

/**
 * Example workout data
 * @type {Workout}
 */
const exampleWorkout = {
  id: '1',
  name: 'Full Body Workout',
  description: 'A complete full body workout.',
  exercises: [
    {
      id: '1',
      name: 'Push Up',
      description: 'A basic push up exercise.',
      category: 'Strength',
      equipment: 'None',
      musclesWorked: ['Chest', 'Triceps'],
      imageUrl: 'https://example.com/image.jpg',
      videoUrl: 'https://example.com/video.mp4'
    }
    // ...other exercises
  ],
  category: 'Full Body',
  duration: 45,
  level: 'Intermediate'
};

export default exampleWorkout;

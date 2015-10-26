// -> Let's define three objects: 'machine' 'vehicle' and 'robot'
const machine = {};
const vehicle = {};
const robot = {};

// -> Make machine the prototype of vehicle
Object.setPrototypeOf(vehicle, machine);
// -> Make machine the prototype of robot
Object.setPrototypeOf(robot, machine);

// -> What is `vehicle.motors`?
claim(vehicle.motors, undefined);

// -> What is `robot.motors`?
claim(robot.motors, undefined);

// -> Define a 'motors' property on machine, set this to 4
machine.motors = 4;

// -> What is `vehicle.motors` now?
claim(vehicle.motors, 4);

// -> What is `robot.motors`?
claim(robot.motors, 4);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
  machine: machine,
  vehicle: vehicle,
  robot: robot,
};

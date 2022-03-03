const sum = (ns) => ns .reduce ((t, n) => t + n, 0)

const sumofSalaries = (department) =>
  Array .isArray (department) 
    ? sum (department .map (empl => empl .salary))
    : sum (Object .values (department) .map (sumofSalaries))

let company = {
  frontend: [{
  name: 'Alexa',
  salary: 1000
  }, {
  name: 'Adam',
  salary: 880
  }],
  
  backend: {
  cloud: [{
  name: 'Megan',
  salary: 1050
  }, {
  name: 'Oya',
  salary: 990
  }],
  
  security: [{
  name: 'Nelson',
  salary: 1200
  }]
  }
  };

console .log (sumofSalaries (company))
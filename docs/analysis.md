# Analysis Discussion for Thermostat Challenge
[README file](../README.md)

[Domain Model](./domain_model.md)

## User Stories from specification

### User Story 1
```
As a Manufacturer,
So that I know how thermostats are sent out,
I would like the thermostat to default to 20 degrees.
```

### User Story 2
```
As a User,
So that I can increase the house temperature,
I would like to increase the thermostat setting.
```

### User Story 3
```
As a User,
So that I can decrease the house temperature,
I would like to decrease the thermostat setting.
```

### User Story 4
```
As a Manufacturer,
To protect the boiler and central heating function,
I would like to have a minimum setting of 10 degrees.
```

### User Story 5
```
As a System function,
To maximise power saving opportunities,
I would like there to be a power saving mode, which is enabled by default.
```

### User Story 6
```
As a System function,
To minimise energy consumption,
I would like the maximum temperature setting to be 25 degrees, in power saving mode.
```

### User Story 7
```
As a System function,
To prevent boiler issues,
I would like the maximum temperature setting to be 32 degrees, with power saving mode off.
```

### User Story 8
```
As a System function,
to easily return to default temperature,
I would like a reset function to set the temperature to 20 degrees.
```

### User Story 9
```
As a User,
to determine the energy usage,
I would like to see an indicator of the current energy usage band
<18 = low, <=25 = medium, rest = high.
```

### User Story 10
```
As a User,
to easily see the status and function of the thermostat,
I would like a graphical interface to manage and review the thermostat functionality.
```


## Assumptions for challenge
- temperature is given in degrees Celsius
- no direct interaction is required with any other System
  - boiler, radiators, etc.
- no specific interface requirements to be met
- no interface standards to be adhered to
  - minimum interface to be created to show functionality / capability
  - no specific browser identified - will use chrome
  - no CSS guidelines or templates - will use minimum styling as needed.

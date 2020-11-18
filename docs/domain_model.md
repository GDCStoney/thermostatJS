# Domain Model for Thermostat Challenge
[README file](../README.md)

[Analysis Discussion](./analysis.md)

## User Stories from analysis
### User Story 1
```
As a Manufacturer,
So that I know how thermostats are sent out,
I would like the thermostat to default to 20 degrees.
```
#### Objects:
- Thermostat
- Manufacturer (possible)

#### Methods:
- defaultSetting() (possible)

#### Properties:
- default temperature = 20 DegC

#### Interfaces:
- Manufacturing interface (possible)


### User Story 2
```
As a User,
So that I can increase the house temperature,
I would like to increase the thermostat setting.
```
#### Objects:
- User (possible)
- house temperature (possible)

#### Methods:
- thermostat.up()

#### Properties:
Thermostat:
- set temperature (possible)
- current temperature (possible)

#### Interfaces:
- User interface


### User Story 3
```
As a User,
So that I can decrease the house temperature,
I would like to decrease the thermostat setting.
```
#### Objects:

#### Methods:
- thermostat.down()

#### Properties:

#### Interfaces:


### User Story 4
```
As a Manufacturer,
To protect the boiler and central heating function,
I would like to have a minimum setting of 10 degrees.
```
#### Objects:
- boiler (possible)
- central heating system (possible)

#### Methods:

#### Properties:
Thermostat
- minimum temperature = 10 DegC (CONSTANT)

#### Interfaces:
- boiler (possible)
- central heating (possible)


### User Story 5
```
As a System function,
To maximise power saving opportunities,
I would like there to be a power saving mode, which is enabled by default.
```
#### Objects:

#### Methods:
- thermostat.powerSaveMode() (switch)

#### Properties:
thermostat
- powerSaveMode (default = ON)

#### Interfaces:


### User Story 6
```
As a System function,
To minimise energy consumption,
I would like the maximum temperature setting to be 25 degrees, in power saving mode.
```
#### Objects:

#### Methods:

#### Properties:
thermostat
- maxTempPowerSaveOn = 25 DegC (CONSTANT)

#### Interfaces:


### User Story 7
```
As a System function,
To prevent boiler issues,
I would like the maximum temperature setting to be 32 degrees, with power saving mode off.
```
#### Objects:

#### Methods:

#### Properties:
thermostat
- maxTempPowerSaveOff = 32 (CONSTANT)

#### Interfaces:


### User Story 8
```
As a System function,
to easily return to default temperature,
I would like a reset function to set the temperature to 20 degrees.
```
#### Objects:

#### Methods:
- thermostat.reset()

#### Properties:

#### Interfaces:


### User Story 9
```
As a User,
to determine the energy usage,
I would like to see an indicator of the current energy usage band
<18 = low, <=25 = medium, rest = high.
```
#### Objects:
- user Interface (min = console)

#### Methods:
- thermostat.currentEnergyUsageBand()

#### Properties:
thermostat
- lowEnergyUsageBand = 17 (inclusive) (CONSTANT)
- mediumEnergyUsageBand = 25 (inclusive) (CONSTANT)
- highEnergyUsageBand = maxTempPowerSaveOff (inclusive) (CONSTANT)

#### Interfaces:


### User Story 10
```
As a User,
to easily see the status and function of the thermostat,
I would like a graphical interface to manage and review the thermostat functionality.
```
#### Objects:
- graphical user interface

#### Methods:
- Graphical interface methods for browser

#### Properties:

#### Interfaces:
- browser via HTML / CSS / AJAX (min = Chrome)


## Ongoing Development Changes / Discussions
-
- 

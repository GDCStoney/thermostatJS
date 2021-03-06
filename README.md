# Thermostat Challenge

[Analysis Discussion](./docs/analysis.md)

[Domain Model](./docs/domain_model.md)

## Interface guidance
- The interface is in index.html (root of this repo)
- clicking the top of the central disc, increments the temp
- clicking on the bottom of the central disc, decrements the temp
- clicking on the button below the thermostat (for the PLUS thermostat), changes the Power Save Mode
- double clicking the central temperature readout, resets the thermostat to defaults


## specification:
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default but it can also be turned off
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Tools / Setup:
- Using Jasmine for the testing
- NodeJS for the local running of the code / feature testing
- Chrome for the default browser for the user interface work at the end
- standard TDD / BDD development process, working from the interpreted user stories from the given spec.
- doing minimum feature delivery steps.

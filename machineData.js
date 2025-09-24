const machineData = {
  "VENUS 6": {
    "P10": {
      "PALLATE NOT MOVING": [
        {
          "verification": [
            "Inspected Start Pallet Button and Kick mechanism",
            "Checked conveyor belt alignment and motor function",
            "Examined cylinder and valve for air pressure and movement",
            "Tested wire connections for continuity",
            "Verified RFID signal and there cannot be duplicate number on the conveyor"
          ],
          "solution": [
            "Replaced the Start Pallet button with a new unit",
            "Verified button functionality and confirmed signal transmission to the control panel",
            "Realigned the conveyor belt and checked tension. Lubricated moving parts and ensured motor drive was functioning properly",
            "Inspected air supply line for leaks. Replaced damaged tubing and confirmed proper pressure using a gauge",
            "If any wire is found to be damaged or disconnected, replace it with a new wire or establish a secure new connection using appropriate terminals and insulation methods",
            "Replace the duplicate RFID with the correct one"
          ]
        }
      ],
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken:\nRemove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ]
    },
    "P20": {
      "PALLATE NOT MOVING": [
        {
          "verification": [
            "Inspected Start Pallet Button and Kick mechanism",
            "Checked conveyor belt alignment and motor function",
            "Examined cylinder and valve for air pressure and movement",
            "Tested wire connections for continuity",
            "Verified RFID signal and there cannot be duplicate number on the conveyor"
          ],
          "solution": [
            "Replaced the Start Pallet button with a new unit",
            "Verified button functionality and confirmed signal transmission to the control panel",
            "Realigned the conveyor belt and checked tension. Lubricated moving parts and ensured motor drive was functioning properly",
            "Inspected air supply line for leaks. Replaced damaged tubing and confirmed proper pressure using a gauge",
            "If any wire is found to be damaged or disconnected, replace it with a new wire or establish a secure new connection using appropriate terminals and insulation methods",
            "Replace the duplicate RFID with the correct one"
          ]
        }
      ],
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken:\nRemove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ]
    },
    "P30": {
      "PALLATE NOT MOVING": [
        {
          "verification": [
            "Inspected Start Pallet Button and Kick mechanism",
            "Checked conveyor belt alignment and motor function",
            "Examined cylinder and valve for air pressure and movement",
            "Tested wire connections for continuity",
            "Verified RFID signal and there cannot be duplicate number on the conveyor"
          ],
          "solution": [
            "Replaced the Start Pallet button with a new unit",
            "Verified button functionality and confirmed signal transmission to the control panel",
            "Realigned the conveyor belt and checked tension. Lubricated moving parts and ensured motor drive was functioning properly",
            "Inspected air supply line for leaks. Replaced damaged tubing and confirmed proper pressure using a gauge",
            "If any wire is found to be damaged or disconnected, replace it with a new wire or establish a secure new connection using appropriate terminals and insulation methods",
            "Replace the duplicate RFID with the correct one"
          ]
        }
      ],
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken:\nRemove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ]
    },
    "P32.33": {
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken",
            "Remove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ],
      "Cylinder not moving UP/DOWN": [
        {
          "verification": [
            "Check air supply pressure and line connections",
            "Inspect solenoid valve function and signal",
            "Test manual override (if available)",
            "Examine cylinder rod for obstruction or damage",
            "Verify sensor and limit switch status",
            "Confirm control signal from PLC or relay"
          ],
          "solution": [
            "Restore or stabilize air pressure",
            "Repair or replace solenoid valve",
            "Remove mechanical obstructions",
            "Lubricate or replace faulty cylinder",
            "Realign or replace sensors",
            "Fix wiring or control signal issues"
          ]
        }
      ],
      "Pallate not rotate": [
        {
          "verification": [
            "Check air supply pressure and line connections",
            "Inspect solenoid valve function and signal",
            "Test manual override (if available)",
            "Examine cylinder rod for obstruction or damage",
            "Verify sensor and limit switch status",
            "Confirm control signal from PLC or relay"
          ],
          "solution": [
            "Restore or stabilize air pressure",
            "Repair or replace solenoid valve",
            "Remove mechanical obstructions",
            "Lubricate or replace faulty cylinder",
            "Realign or replace sensors",
            "Fix wiring or control signal issues"
          ]
        }
      ]
    },
    "P40": {
      "GRIPPER NOT GRIP CORRECTLY": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check gripper alignment",
            "Check for mechanical blockage",
            "Check gripper condition"
          ],
          "solution": [
            "Ensure pressure is reaching the gripper actuator",
            "Confirm solenoid receives signal and actuates the gripper",
            "Make sure the gripper is positioned correctly to contact the component",
            "Ensure nothing is preventing the gripper fingers from closing",
            "Inspect for wear, loose parts, or damaged gripping surfaces"
          ]
        }
      ],
      "CYLINDER NOT MOVING UP/DOWN": [
        {
          "verification": [
            "Check the inductive sensor",
            "Check the airflow if it leaking",
            "Check the cylinder rail if something stuck in it or the cylinder is damaged.\nCheck stopper condition and alignment\nCheck belting for damaged"
          ],
          "solution": [
            "If the sensor is broken, replace it.",
            "Tighthen the connection if leaking",
            "Remove the substance in the cylinder's rail or replace if the cylinder is damaged.",
            "Replace stopper if damaged and make sure the alignment is good",
            "replace for the belting if damaged."
          ]
        }
      ],
      "CYLINDER NOT NOT MOVING FORWARD/BACKWARD": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check cylinder condition\nCheck stopper confition and alignment"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder (regulator, gauge, hoses)",
            "Confirm solenoid receives signal and clicks when triggered",
            "Check the inductive sensor working or not (the connection)",
            "Make sure nothing is physically blocking the cylinder",
            "Look for bent rod, misalignment, or internal damage\nReplace stopper if damaged and make sure the alignment is good"
          ]
        }
      ],
      "UNIT HAS SOLDER BRIDGE/\nFLUX NOT SPRAYING CORRECTLY": [
        {
          "verification": [
            "Check flux level in the tank or container",
            "Inspect spray nozzle for clogging or damage",
            "Verify air pressure to the spray system",
            "Confirm correct spray timing and duration settings",
            "Check solenoid valve function and signal",
            "Inspect tubing for leaks, blockages, or loose connections",
            "Ensure proper alignment of spray nozzle to target area",
            "Check stopper or part positioning under spray zone",
            "Check timing for mechanical and standby wave speed/work wave speed",
            "Check the solder chemical mixture",
            "Check if there is any dust or any solder flux residue in the solder mixture."
          ],
          "solution": [
            "Refill flux tank if low or empty",
            "Clean or replace clogged/damaged spray nozzle",
            "Restore correct air pressure to spray system",
            "Adjust spray timing and duration settings",
            "Repair or replace faulty solenoid valve",
            "Fix leaks or clear blocked tubing",
            "Realign spray nozzle for accurate coverage",
            "Reposition stopper or part for proper spray contact",
            "Remove hardened flux and clean spray area",
            "Try and error for the timing",
            "The solder chemical mixture has not be too thick and too diluted",
            "Remove using tools the residue accumulated in the solder mixture and inside the solder holes and check for solder motor for PM or damaged."
          ]
        }
      ]
    },
    "P51": {
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken:\nRemove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ],
      "Cylinder not moving UP/DOWN": [
        {
          "verification": [
            "Check air supply pressure and line connections",
            "Inspect solenoid valve function and signal",
            "Test manual override (if available)",
            "Examine cylinder rod for obstruction or damage",
            "Verify sensor and limit switch status",
            "Confirm control signal from PLC or relay"
          ],
          "solution": [
            "Restore or stabilize air pressure",
            "Repair or replace solenoid valve",
            "Remove mechanical obstructions",
            "Lubricate or replace faulty cylinder",
            "Realign or replace sensors",
            "Fix wiring or control signal issues"
          ]
        }
      ],
      "Pallate not rotate": [
        {
          "verification": [
            "Check air supply pressure and line connections",
            "Inspect solenoid valve function and signal",
            "Test manual override (if available)",
            "Examine cylinder rod for obstruction or damage",
            "Verify sensor and limit switch status",
            "Confirm control signal from PLC or relay"
          ],
          "solution": [
            "Restore or stabilize air pressure",
            "Repair or replace solenoid valve",
            "Remove mechanical obstructions",
            "Lubricate or replace faulty cylinder",
            "Realign or replace sensors",
            "Fix wiring or control signal issues"
          ]
        }
      ]
    },
    "P52": {
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken",
            "Remove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ],
      "Cylinder not moving UP/DOWN": [
        {
          "verification": [
            "Check air supply pressure and line connections",
            "Inspect solenoid valve function and signal",
            "Test manual override (if available)",
            "Examine cylinder rod for obstruction or damage",
            "Verify sensor and limit switch status",
            "Confirm control signal from PLC or relay"
          ],
          "solution": [
            "Restore or stabilize air pressure",
            "Repair or replace solenoid valve",
            "Remove mechanical obstructions",
            "Lubricate or replace faulty cylinder",
            "Realign or replace sensors",
            "Fix wiring or control signal issues"
          ]
        }
      ],
      "Camera Blurred": [
        {
          "verification": [
            "Check the Lens Surface",
            "Inspect for dust, smudges, moisture, or protective film.",
            "Use a microfiber cloth to gently clean the lens",
            "Look for cracks, scratches, or internal fogging",
            "If the lens is misaligned or damaged, it may require replacement"
          ],
          "solution": [
            "Use IPA and a lint-free cloth for stubborn residue",
            "If the lens or sensor is faulty, replacement may be necessary",
            "For industrial or high-precision cameras, recalibration may be needed."
          ]
        }
      ],
      "Gripper Stuck": [
        {
          "verification": [
            "Check for any foreign objects, debris, or misaligned parts obstructing the gripper\u2019s movement.",
            "Inspect the gripper jaws for wear, damage, or misalignment.",
            "Ensure air pressure or hydraulic fluid is within operating range.",
            "Look for leaks, loose fittings, or damaged hoses.",
            "Confirm that limit switches or position sensors are functioning correctly.",
            "Use diagnostics to verify that open/close signals are being received.",
            "Manually move the gripper (if safe) to check for smooth operation.",
            "Check for error codes or alarms in the control system."
          ],
          "solution": [
            "Remove debris and apply appropriate lubricant to moving parts.",
            "Realign gripper jaws or mounting brackets if they\u2019re off-center.",
            "Swap out worn-out seals, hoses, or mechanical parts.",
            "Reinitialize the gripper in the control system or recalibrate sensors.",
            "Ensure valves controlling pneumatic flow are not stuck or faulty."
          ]
        }
      ]
    },
    "P53": {
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken",
            "Remove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ],
      "Cylinder not moving UP/DOWN": [
        {
          "verification": [
            "Check air supply pressure and line connections",
            "Inspect solenoid valve function and signal",
            "Test manual override (if available)",
            "Examine cylinder rod for obstruction or damage",
            "Verify sensor and limit switch status",
            "Confirm control signal from PLC or relay"
          ],
          "solution": [
            "Restore or stabilize air pressure",
            "Repair or replace solenoid valve",
            "Remove mechanical obstructions",
            "Lubricate or replace faulty cylinder",
            "Realign or replace sensors",
            "Fix wiring or control signal issues"
          ]
        }
      ],
      "Camera Blurred": [
        {
          "verification": [
            "Check the Lens Surface",
            "Inspect for dust, smudges, moisture, or protective film.",
            "Use a microfiber cloth to gently clean the lens",
            "Look for cracks, scratches, or internal fogging",
            "If the lens is misaligned or damaged, it may require replacement"
          ],
          "solution": [
            "Use IPA and a lint-free cloth for stubborn residue",
            "If the lens or sensor is faulty, replacement may be necessary",
            "For industrial or high-precision cameras, recalibration may be needed."
          ]
        }
      ],
      "Gripper Stuck": [
        {
          "verification": [
            "Check for any foreign objects, debris, or misaligned parts obstructing the gripper\u2019s movement.",
            "Inspect the gripper jaws for wear, damage, or misalignment.",
            "Ensure air pressure or hydraulic fluid is within operating range.",
            "Look for leaks, loose fittings, or damaged hoses.",
            "Confirm that limit switches or position sensors are functioning correctly.",
            "Use diagnostics to verify that open/close signals are being received.",
            "Manually move the gripper (if safe) to check for smooth operation.",
            "Check for error codes or alarms in the control system."
          ],
          "solution": [
            "Remove debris and apply appropriate lubricant to moving parts.",
            "Realign gripper jaws or mounting brackets if they\u2019re off-center.",
            "Swap out worn-out seals, hoses, or mechanical parts.",
            "Reinitialize the gripper in the control system or recalibrate sensors.",
            "Ensure valves controlling pneumatic flow are not stuck or faulty."
          ]
        }
      ]
    },
    "P54": {
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken",
            "Remove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ]
    },
    "P60": {
      "Pallate not stopping": [
        {
          "verification": [
            "Check sensor, see if it working or not",
            "Check stopper see if there is something blocking the operation"
          ],
          "solution": [
            "Adjust or replace sensor if broken",
            "Remove debris or foreign objects and clean and inspect stopper mechanism"
          ]
        }
      ],
      "PALLATE NOT MOVING": [
        {
          "verification": [
            "Inspected Start Pallet Button and Kick mechanism",
            "Checked conveyor belt alignment and motor function",
            "Examined cylinder and valve for air pressure and movement",
            "Tested wire connections for continuity",
            "Verified RFID signal and there cannot be duplicate number on the conveyor"
          ],
          "solution": [
            "Replaced the Start Pallet button with a new unit",
            "Verified button functionality and confirmed signal transmission to the control panel",
            "Realigned the conveyor belt and checked tension. Lubricated moving parts and ensured motor drive was functioning properly",
            "Inspected air supply line for leaks. Replaced damaged tubing and confirmed proper pressure using a gauge",
            "If any wire is found to be damaged or disconnected, replace it with a new wire or establish a secure new connection using appropriate terminals and insulation methods",
            "Replace the duplicate RFID with the correct one"
          ]
        }
      ]
    },
    "P71": {
      "LASER NOT DETECT THE ITEM (M002088)(LB11-03)": [
        {
          "verification": [
            "1) Check the connection on the laser",
            "2) Test whether the laser working or not"
          ],
          "solution": [
            "1) Tighten the connection if loose",
            "2) If not working, replace it."
          ]
        }
      ],
      "CYLINDER NOT MOVING RIGHT/LEFT (DGSL-12-50-Y3A)": [
        {
          "verification": [
            "1) Check the inductive sensor",
            "2) Check the airflow if it leaking",
            "3) Check the cylinder rail if something stuck in it or the cylinder is damaged."
          ],
          "solution": [
            "1) If the sensor is broken, replace it (LA05-05)",
            "2) Tighthen the connection if leaking",
            "3) Remove the substance in the cylinder's rail or replace if the cylinder is damaged."
          ]
        }
      ],
      "CYLINDER NOT MOVING UP/DOWN (HGDS-PP-12-PAB)": [
        {
          "verification": [
            "1) Check the inductive sensor",
            "2) Check the airflow if it leaking",
            "3) Check the cylinder rail if something stuck in it or the cylinder is damaged."
          ],
          "solution": [
            "1) If the sensor is broken, replace it.",
            "2) Tighthen the connection if leaking",
            "3) Remove the substance in the cylinder's rail or replace if the cylinder is damaged."
          ]
        }
      ],
      "THE GRIPPER DOES NOT ROTATE": [
        {
          "verification": [
            "1) Check the inductive sensor",
            "2) Check the airflow if it leaking",
            "3) Check the cylinder rail if something stuck in it or the cylinder is damaged."
          ],
          "solution": [
            "1) If the sensor is broken, replace it.",
            "2) Tighthen the connection if leaking",
            "3) Remove the substance in the cylinder's rail or replace if the cylinder is damaged."
          ]
        }
      ],
      "CYLINDER NOT MOVING RIGHT/LEFT (DGSL-16-100-Y3A)": [
        {
          "verification": [
            "1) Check the inductive sensor",
            "2) Check the airflow if it leaking",
            "3) Check the cylinder rail if something stuck in it or the cylinder is damaged."
          ],
          "solution": [
            "1) If the sensor is broken, replace it.",
            "2) Tighthen the connection if leaking",
            "3) Remove the substance in the cylinder's rail or replace if the cylinder is damaged."
          ]
        }
      ],
      "CYLINDER NOT MOVING UP/DOWN (DGSL-12-50-Y3A)": [
        {
          "verification": [
            "1) Check the inductive sensor",
            "2) Check the airflow if it leaking",
            "3) Check the cylinder rail if something stuck in it or the cylinder is damaged."
          ],
          "solution": [
            "1) If the sensor is broken, replace it.",
            "2) Tighthen the connection if leaking",
            "3) Remove the substance in the cylinder's rail or replace if the cylinder is damaged."
          ]
        }
      ],
      "LASER AT ROTATION PLATE NOT DETECT ITEM": [
        {
          "verification": [
            "1) Check the connection on the laser",
            "2) Test whether the laser working or not"
          ],
          "solution": [
            "1) Tighten the connection if loose",
            "2) If not working, replace it."
          ]
        }
      ]
    },
    "P72": {
      "KNIFE BLUNT": [
        {
          "verification": [
            "Check the knife, see if it have cracked or dull."
          ],
          "solution": [
            "Replace the knife. Pick Knife 1 and Knife 2. (LB12-14)"
          ]
        }
      ],
      "CYLINDER STUCK/JAMMED\n(M013574)(DGSL-16-50-Y3A 544001 P102)": [
        {
          "verification": [
            "1) Check if there are tin wire at the slider's rail.",
            "2) Check if there are tin between slider and and the knife",
            "3) If need to replace the cylinder",
            "4) The speed of the thrust too high"
          ],
          "solution": [
            "1) Clean and clear the rail",
            "2) Maybe the knife does not does the tin wire throughly",
            "3) The cylinder it at LD09-02",
            "4) Adjust the speed at the block"
          ]
        }
      ],
      "SENSOR NOT TRIGGERED": [
        {
          "verification": [
            "1) Check the sensor to see if it damaged or not.",
            "2) Check the amplifier is it allign with the parameters or not"
          ],
          "solution": [
            "1) Replace the sensor",
            "2) Make sure value at the parameters and amplifier is allign (LB04-13)"
          ]
        }
      ],
      "CYLINDER STUCK JAMMED\n(M011448) (DGSL-16-80-Y3A)": [
        {
          "verification": [
            "1) If need to replace the cylinder"
          ],
          "solution": [
            "1) The cylinder is at LG09"
          ]
        }
      ],
      "LED DOES NOT LIGHT UP; NO SIGNAL TO PLC OR CONTROLLER": [
        {
          "verification": [
            "Inspect cable for cuts/wear/damaged"
          ],
          "solution": [
            "Replace cable or sensor"
          ]
        }
      ],
      "SENSOR DOES NOT DETECT A POSITION; LED STAYS OFF+C10": [
        {
          "verification": [
            "Reposition sensor correctly"
          ],
          "solution": [
            "Ensure magnet is present and properly alligned"
          ]
        }
      ],
      "LED STAYS ON CONSTANTLY": [
        {
          "verification": [
            "Check for overvoltage or incorrect wiring"
          ],
          "solution": [
            "Verify the sensor's rated voltage (e.g., 10\u201330V DC).",
            "Use a multimeter to measure actual supply voltage.",
            "If voltage exceeds the rated range, replace or regulate the power source.",
            "Replace if damaged."
          ]
        }
      ],
      "THE BAR DOES NOT GOES UP/DOWN": [
        {
          "verification": [
            "1) Make sure the bar position is near with the sensor.",
            "2) Check the connection of wire. Check if it burned or damaged."
          ],
          "solution": [
            "1)The postion of the bar and the sensor have to be near",
            "2) Replace the wire with the new one."
          ]
        }
      ]
    },
    "P73": {
      "THE COMPONENT IS NOT MOVING FORWARD": [
        {
          "verification": [
            "CHECK THE INDUCTIVE SENSOR WHETHER IT WORKING OR NOT",
            "CHECK THE CYLINDER IF IT DAMAGED",
            "CHECK THE VALVE",
            "CHECK THE ROD IF IT STUCK IN THE CYLINDER",
            "INSPECT THE AIRFLOW CONNECTION"
          ],
          "solution": [
            "Replace faulty or misaligned inductive sensor",
            "Replace or rebuild damaged cylinder",
            "Clean or replace valve",
            "verify solenoid function",
            "Lubricate or replace stuck rod",
            "remove mechanical blockage",
            "Fix loose or leaking airflow connections"
          ]
        }
      ],
      "PROBLEM WITH BENDING (ANGLE)": [
        {
          "verification": [
            "CHECK CYLINDER (AND-32-5-1-PA) FOR DAMAGED",
            "CHECK THE VALVE",
            "CHECK THE CYLINDER IF IT DAMAGED",
            "INSPECT THE AIRFLOW CONNECTION"
          ],
          "solution": [
            "Replace damaged cylinder (AND-32-5-1-PA)",
            "Clean or replace valve",
            "verify solenoid function",
            "Replace or rebuild damaged cylinder",
            "Fix loose or leaking airflow connections",
            "ADJUST THE ANGLE 'CAS' AND 'CRS'"
          ]
        }
      ],
      "CYLINDER (ANN-40-50-A-P-A )NOT MOVING UP/DOWN": [
        {
          "verification": [
            "CHECK THE CYLINDER FOR DAMAGED",
            "CHECK THE VALVE",
            "CHECK THE CYLINDER IF IT DAMAGED",
            "INSPECT THE AIRFLOW CONNECTION"
          ],
          "solution": [
            "Replace or rebuild damaged cylinder",
            "Clean or replace valve",
            "verify solenoid function",
            "Fix loose or leaking airflow connections"
          ]
        }
      ],
      "CYLINDER NOT PRESSING THE PIN FIRMLY AGAINST THE COMPONENT": [
        {
          "verification": [
            "CHECK THE INDUCTIVE SENSOR",
            "CHECK THE CYLINDER FOR DAMAGED",
            "CHECK THE VALVE",
            "CHECK THE CYLINDER IF IT DAMAGED",
            "INSPECT THE AIRFLOW CONNECTION"
          ],
          "solution": [
            "Replace faulty or misaligned inductive sensor",
            "Replace or rebuild damaged cylinder",
            "Clean or replace valve",
            "verify solenoid function",
            "Fix loose or leaking airflow connections",
            "THE INDUCTIVE SENSOR SHOULD 'OFF' WHEN MOVING AND 'ON' WHEN NOT MOVING"
          ]
        }
      ],
      "THE ROTATING PLATE NOT ROTATING": [
        {
          "verification": [
            "CHECK THE INDUCTIVE SENSOR",
            "CHECK THE CYLINDER FOR DAMAGED",
            "CHECK THE VALVE",
            "CHECK THE CYLINDER IF IT DAMAGED",
            "INSPECT THE AIRFLOW CONNECTION"
          ],
          "solution": [
            "Replace faulty or misaligned inductive sensor",
            "Replace or rebuild damaged cylinder",
            "Clean or replace valve",
            "verify solenoid function",
            "Fix loose or leaking airflow connections",
            "ENSURE THE INDUCTIVE SENSOR IS WORKING WELL"
          ]
        }
      ]
    },
    "P74": {
      "CYLINDER NOT NOT MOVING FORWARD/BACKWARD": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check cylinder condition"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder (regulator, gauge, hoses)",
            "Confirm solenoid receives signal and clicks when triggered",
            "Check the inductive sensor working or not (the connection)",
            "Make sure nothing is physically blocking the cylinder",
            "Look for bent rod, misalignment, or internal damage"
          ]
        }
      ],
      "PLATFORM NOT MOVING UP/DOWN": [
        {
          "verification": [
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check lift mechanism condition"
          ],
          "solution": [
            "Confirm solenoid receives signal and functions properly",
            "Verify up/down position sensors are working and sending signals (Inductive sensor)",
            "Make sure nothing is obstructing the platform movement",
            "Inspect for wear, misalignment, or damaged components"
          ]
        }
      ],
      "CYLINDER (GP416NC-C) NOT CLAMP THE COMPONENT": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check clamp alignment",
            "Check for mechanical blockage",
            "Check cylinder condition"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder and within operating range",
            "Confirm solenoid receives signal and activates correctly",
            "Make sure the clamp is positioned properly to grip the component",
            "Ensure nothing is preventing clamp movement or contact",
            "Inspect for internal wear, loose fittings, or damaged parts"
          ]
        }
      ],
      "NOT CUTTING THE TIN WIRE": [
        {
          "verification": [
            "Check blade condition",
            "Check actuator movement",
            "Check wire position",
            "Check signal or trigger",
            "Check for mechanical blockage"
          ],
          "solution": [
            "Ensure the cutter blade is sharp, clean, and not worn out",
            "Confirm cylinder or motor driving the cutter is functioning properly",
            "Make sure the tin wire is correctly aligned in the cutting zone",
            "Verify the cutting signal is sent and received by the system",
            "Ensure no obstruction is preventing blade movement"
          ]
        }
      ]
    },
    "P75": {
      "CYLINDER 1 (DGSL-16-100-Y3A))NOT MOVING LEFT/RIGHT": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check cylinder condition"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder and is within required range",
            "Confirm solenoid receives signal and activates properly",
            "Verify left/right sensors are working and sending correct signals",
            "Make sure nothing is obstructing the cylinder movement",
            "Inspect for internal damage, misalignment, or loose fittings",
            "Replace the cylinder if broken/damaged. (M001291)(LD09-02)"
          ]
        }
      ],
      "CYLINDER 2 (DGSL-12-50-Y3A) NOT MOVING UP/DOWN": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check cylinder condition"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder and is within required range",
            "Confirm solenoid receives signal and activates properly",
            "Verify up/down sensors are working and sending correct signals",
            "Make sure nothing is obstructing the cylinder movement",
            "Inspect for internal damage, misalignment, or loose fittings.",
            "Replace the cylinder if broken/damaged. (M001292)(LA05-05)"
          ]
        }
      ],
      "GRIPPER NOT GRIP THE COMPONENT": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check gripper alignment",
            "Check for mechanical blockage",
            "Check gripper condition"
          ],
          "solution": [
            "Ensure pressure is reaching the gripper actuator",
            "Confirm solenoid receives signal and actuates the gripper",
            "Make sure the gripper is positioned correctly to contact the component",
            "Ensure nothing is preventing the gripper fingers from closing",
            "Inspect for wear, loose parts, or damaged gripping surfaces"
          ]
        }
      ],
      "CYLINDER NOT ROTATE 180": [
        {
          "verification": [
            "Check air pressure",
            "Check sensor feedback",
            "Check mechanical stops",
            "Check control logic",
            "Check actuator condition"
          ],
          "solution": [
            "Confirm sufficient and stable air supply to the rotary actuator",
            "Ensure sensors detect both 0\u00b0 and 180\u00b0 positions correctly",
            "Verify that no physical obstruction limits rotation",
            "Confirm PLC or controller sends correct rotate signal",
            "Inspect rotary cylinder for internal wear or damage",
            "Cylinder rotation is fixed 0\u00b0 to 180\u00b0.",
            "Replace the cylinder if broken/damaged."
          ]
        }
      ],
      "CYLINDER 3 NOT MOVING UP/DOWN": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check cylinder condition"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder and is within required range",
            "Confirm solenoid receives signal and activates properly",
            "Verify up/down sensors are working and sending correct signals",
            "Make sure nothing is obstructing the cylinder movement",
            "Inspect for internal damage, misalignment, or loose fittings.",
            "Replace the cylinder if broken/damaged."
          ]
        }
      ]
    },
    "P76": {
      "THE MARKING IS FAR FROM CLEAN AND ACCEPTABLE": [
        {
          "verification": [
            "Check Print Head or Marking Tool"
          ],
          "solution": [
            "Use proper cleaning agents or swap out worn parts."
          ]
        }
      ]
    },
    "P82": {
      "CYLINDER (DGSL-12-20-PA) NOT MOVING UP/DOWN": [
        {
          "verification": [
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check lift mechanism condition"
          ],
          "solution": [
            "Confirm solenoid receives signal and functions properly",
            "Verify up/down position sensors are working and sending signals (Inductive sensor)",
            "Make sure nothing is obstructing the platform movement",
            "Inspect for wear, misalignment, or damaged components"
          ]
        }
      ],
      "GRIPPER NOT FUNCTION": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check clamp alignment",
            "Check for mechanical blockage",
            "Check cylinder condition"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder and within operating range",
            "Confirm solenoid receives signal and activates correctly",
            "Make sure the clamp is positioned properly to grip the component",
            "Ensure nothing is preventing clamp movement or contact",
            "Inspect for internal wear, loose fittings, or damaged parts"
          ]
        }
      ]
    },
    "P83": {
      "CAMERA CANNOT DETECT OBJECT CLEARLY": [
        {
          "verification": [
            "Check Lens for Dirt or Smudges\nInspect Lighting Conditions\nInspect for Physical Damage"
          ],
          "solution": [
            "Clean the lens gently with a microfiber cloth or lens cleaner.\nImprove ambient lighting or add direct illumination to reduce shadows and glare.\nIf lens or sensor is cracked or misaligned, consider professional repair or replacement."
          ]
        }
      ],
      "CYLINDER (DGSL-12-20-PA) NOT MOVING UP/DOWN": [
        {
          "verification": [
            "Check solenoid activation",
            "Check sensors",
            "Check for mechanical blockage",
            "Check lift mechanism condition"
          ],
          "solution": [
            "Confirm solenoid receives signal and functions properly",
            "Verify up/down position sensors are working and sending signals (Inductive sensor)",
            "Make sure nothing is obstructing the platform movement",
            "Inspect for wear, misalignment, or damaged components"
          ]
        }
      ],
      "GRIPPER NOT FUNCTION": [
        {
          "verification": [
            "Check air supply",
            "Check solenoid activation",
            "Check clamp alignment",
            "Check for mechanical blockage",
            "Check cylinder condition"
          ],
          "solution": [
            "Ensure pressure is reaching the cylinder and within operating range",
            "Confirm solenoid receives signal and activates correctly",
            "Make sure the clamp is positioned properly to grip the component",
            "Ensure nothing is preventing clamp movement or contact",
            "Inspect for internal wear, loose fittings, or damaged parts"
          ]
        }
      ]
    }
  }
};
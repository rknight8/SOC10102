var rooms = {
  "start": {
    "introduction": "You wake to the sound of an alarm. The ground beneath you shakes as you steady yourself against a wall. You recognise the alarm as the one to abandon ship. You remember there being an escape pod on the upper deck. You need escape G-34B.",
    "action": {
      "look around": "crewQuarters"
    }
  },
  "crewQuarters": {
    "description": "You wake to the sound of an alarm. The ground beneath you shakes as you steady yourself against a wall. You recognise the alarm as the one to abandon ship. You remember there being an escape pod on the upper deck. You need escape G-34B.",
    "direction": {
      "go to door": "button"
      }
  },
  "button": {
    "description": "You approach the door expecting it to open automatically but it does not. To you right, there is a panel with a button that reads: In case of emergency, push to open.",
    "direction": {
      "push button": "corridor1"
      }
  },
  "corridor1": {
    "description": "With the alarms still ringing in your ears, you look around and see two doors, one to the west and one to the east at the far end of the corridor. There is a ladder in the centre of the corridor. Coughing, you notice smoke above you. You will not survive long here. You don’t think you can go up the ladder without some sort of gas mask to protect you from the smoke.",
    "direction": {
      "go up ladder": "ladder"
      }
  },
  "ladder": {
    "description": "As you look up you notice smoke billowing out from a hole in the ceiling. You decide to go up anyway. You reach the top of the ladder; the smoke is thick here. Covering you mouth with your sleeve the smoke makes your eyes sting. It doesn’t take long for you to lose all sense of direction and the world slowly fades to black. END",
  },
  "kitchen": {
    "description": "In the centre of the room is a small dinning table with enough space to fit a small crew and a kitchen space to your left. A small vent shaft on the wall to your right. The noise of the alarm is a constant sound in your ears. Some emergency equipment has been stashed in one corner of the room."
  },
  "corridor12": {
    "description": "Putting on the gas mask you can breathe normally. However, the smoke has greatly limited your vision. You remember the ladder being in the middle of the corridor. You don’t want to stay here any longer than necessary."
  },
  "corridor2": {
    "description": "You try to focus on your surroundings, but it is hard to see anything through the thick smoke. On the north-east wall you see an open door. Through your mask you can smell something burning. You need to leave this place. "
  },
  "escapeRoom": {
    "description": "Stumbling across the corridor you make it to the door. There is smoke everywhere and the alarm continues to sound. The ship starts to tilt, and you sway on your feet trying to stay upright. Looking ahead, you notice one escape pod left in the room. The other crew members must have made it off the ship. You need to do the same."
  }
};

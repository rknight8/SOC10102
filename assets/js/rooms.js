var rooms = {
  "start": {
    "description": "You wake to the sound of an alarm. The ground beneath you shakes as you steady yourself against a wall. You recognise the alarm as the one to abandon ship. You remember there being an escape pod on the <b>upper deck</b>. You need escape G-34B.",
    "direction": {
      "around": "crewQuarters"
    }
  },

  "crewQuarters": {
    "description": "You seem to be in the crew’s quarters. Four beds occupy the otherwise empty room. The light from the alarm dances across the room. There is a door on the <b>east wall</b>.",
    "item": {
      "description": "Upon closer inspection of one of the beds, there is photo of a man with a bowl cut and a large set of teeth. Writing underneath the photograph reads 'Dwayne Dibley'."
    },
    "direction": {
      "east": "eastDoor1"
      }
  },

  "eastDoor1": {
    "description": "You approach the door expecting it to open automatically but it does not. To you right, there is a panel with a button that reads: 'In case of emergency, <b>push button</b> to open'.",
      "action": {
        "push": "The door lifts open with a whoosh. You enter a narrow <b>corridor</b>. It might be worth <b>looking around</b>."
      },
      "direction": {
        "around": "corridor1",
        "back": "crewQuarters"
      }
  },


  "corridor1": {
    "description": "As you enter notice <b>two doors</b>, one to the <b>west</b> and another to the <b>east</b>. In the middle of the corridor is a <b>ladder</b> where thick smoke is billowing from the ceiling. <b>You don’t think you can go up the ladder without some sort of equipment to protect you</b>.",
    "direction": {
      "ladder": "ladderEnd",
      "back": "crewQuarters",
      "east": "lockedDoor",
      "west": "kitchenDoor"
      }
  },

  "ladderEnd": {
    "description": "As you look at the ladder you notice the smoke coming from the top. You decide to go climb up anyway. As you climb up the smoke makes your eyes sting and clogs up your lungs. Although you manage to get to the upper deck you feel dizzy and lose consciousness. <b>END.</b> Try Again?"
  },

  "lockedDoor": {
    "description": "You approach the east door and press the button on the emergency panel — nothing happens. You push the button again, but the door doesn’t budge. Looks like the door is stuck. The <b>west door</b> you saw earlier is behind you.",
    "direction": {
      "ladder": "ladderEnd",
      "west": "kitchenDoor"
    }
  },

  "kitchenDoor": {
    "description": "At the west door you notice another emergency panel. The writing on this panel is corroded, however the <b>pushing the button might still work</b>. The alarm continues to ring in your ears. Smoke fills the room making it <b>impossible to turn back without any protection.</b>",
    "action": {
      "push": "Pushing the button, the door starts to lift. It jams halfway from the floor. The ship suddenly shakes violently. You notice the door above you rattling in the doorway, threatening to drop. You need to decide if you want to <b>go forward</b> or <b>go back</b>."
    },
    "direction": {
      "back": "doorEnd",
      "forward": "kitchen2"
    }
  },

  "doorEnd": {
    "description": "You back away from the door to see it drop with a loud thud. You try pushing the button again, but nothing happens. Your eyes sting from the smoke and you start coughing. You try the other door in the corridor, but it is locked. You try to make it back to the crew quarters, but the smoke limits your vision. You stumble across the corridor only to collapse beside the ladder, the world fading before your eyes. <b>END.</b> Try Again?"
  },

  "kitchen2": {
    "description": "You continue onwards and manage to crawl under the door just before the door collapses. Looking around the small mess hall brings back happy memories. Some <b>emergency equipment</b> has been hastily stashed in one corner of the room. The noise of the alarm is a constant sound in your ears.",
    "direction": {
      "north": "vent2"
    },
    "item": {
      "description": "Most of the equipment looks broken but you manage to salvage a <b>gas mask</b> with a cracked eye lens and a <b>wrench</b>. You notice a <b>vent on the north wall</b>."
    }
  },

  "vent2": {
    "description": "With the door jammed you take your chances with the small vent. It is secured on the wall with four bolts. A <b>wrench</b> might be useful here.",
    "direction": {
      "wrench": "corridor2",
      "back": "kitchen3"
    }
  },

  "kitchen3": {
    "description": "Looking around the small mess hall brings back happy memories. There's a <b>vent</b> on the <b>north wall</b>. Some <b>emergency equipment</b> has been hastily stashed in one corner of the room. The noise of the alarm is a constant sound in your ears.",
    "direction": {
      "north": "vent2"
    },
    "item": {
      "description": "Most of the equipment looks broken but you manage to salvage a <b>gas mask</b> with a cracked eye lens and a <b>wrench</b>. You remember there being a <b>vent on the north wall</b>."
    }
  },

  "corridor2": {
    "description": "Using the wrench, you managed to take the cover off the vent and climb through. You end up in the same corridor you were in previously. The smoke has gotten considerably worse. A <b>gas mask</b> would be useful here.",
    "direction": {
      "gas": "corridor3"
    }
  },

    "corridor3": {
    "description": "Putting on the gas mask you can breathe normally. However, the smoke has greatly limited your vision. You remember the <b>ladder</b> being in the middle of the corridor. You don’t want to stay here any longer than necessary.",
    "direction": {
      "ladder": "ladder2"
    }
  },

  "ladder2": {
    "description": "You climb the ladder with little difficulty and pull yourself up onto the <b>upper deck</b>. On the <b>north wall</b> you see an open door. Through your mask you can smell something burning. You should leave this place.",
    "direction": {
      "north": "escapeRoom"
    }
  },

  "escapeRoom": {
    "description": "Stumbling across the corridor you make it to the door. There is smoke everywhere and the alarm continues to sound. The ship starts to tilt, and you sway on your feet trying to stay upright. Looking ahead, you notice <b>one escape pod left in the room to the east</b>. The other crew members must have made it off the ship. You need to do the same.",
    "direction": {
      "escape": "endingGood"
    }
  },

  "endingGood": {
    "description": "Tripping over your feet you manage to secure yourself in the escape pod before something explodes in the corridor you were previously in. Hastily, you make sure the controls are correct. Although the gas mask makes it hard to see you manage to make sure everything is in order. Another crash. You are shaking as you hit the button that will deploy your escape pod. From your escape pod in space you see G-34B hurtling towards an unknown planet, the ship falling to pieces as it makes its decent. You take a few shaky breaths. <b>You made it!</b> You managed to escape cruiser ship G-34B!"
  }
};

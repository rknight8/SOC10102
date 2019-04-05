var rooms = {
  "start": {
    "description": "You wake to the sound of an alarm. The ground beneath you shakes as you steady yourself against a wall. You recognise the alarm as the one to abandon ship. You remember there being an escape pod on the upper deck. You need escape G-34B.",
    "direction": {
      "room": "crewQuarters"
    }
  },

  "crewQuarters": {
    "description": "You seem to be in the crew’s quarters. Four beds occupy the otherwise empty room. The light from the alarm dances across the room. There is a door on the east wall.",
    "examine": {
      "look": "easterEgg"
    },
    "direction": {
      "east": "eastDoor1"
      }
  },

  "easterEgg": {
    "description": "Upon closer inspection of one of the beds, there is photo of a man with a bowl cut and a large set of teeth. Writing underneath the photograph reads “Dwayne Dibley”.",
    "examine": {
      "room": "crewQuarters"
      }
  },

  "eastDoor1": {
    "description": "You approach the door expecting it to open automatically but it does not. To you right, there is a panel with a button that reads: In case of emergency, push to open.",
    "examine": {
      "room": "crewQuarters"
    },
      "direction": {
      "push": "button"
      }
  },

  "button": {
    "description": "The door lifts open with a whoosh and as you enter the dimly lit corridor you notice smoke above you. You won’t survive long here.",
    "action": {
      "room": "corridor1",
    },
    "direction": {
      "back": "crewQuarters"
    }
  },

  "corridor1": {
    "description": "Looking around, there are two doors at the end of a narrow corridor, one to the west and another to the east. In the middle of the corridor is a ladder. You don’t think you can go up the ladder without some sort of equipment to protect you.",
    "direction": {
      "ladder": "ladderEnd",
      "back": "crewQuarters",
      "east": "lockedDoor",
      "west": "kitchenDoor"
      }
  },

  "ladderEnd": {
    "description": "As you look up you notice smoke billowing out from a hole in the ceiling. You decide to go up anyway. You reach the top of the ladder; the smoke is thick here. Covering you mouth with your sleeve the smoke makes your eyes sting. It doesn’t take long for you to lose all sense of direction and the world slowly fades to black. END"
  },

  "lockedDoor": {
    "description": "You approach the east door and press the button — nothing happens. You push the button again, but the door doesn’t budge. Looks like the door is stuck. The west door you saw earlier is behind you.",
    "examine": {
      "room": "corridor1"
    },
    "direction": {
      "ladder": "ladderEnd",
      "west": "kitchenDoor"
    }
  },

  "kitchenDoor": {
    "description": "You approach the door and notice another emergency panel beside the door. The writing on the panel is corroded. The alarm is still ringing in your ears.",
    "action": {
      "push": "kitchenButton"
    },
    "direction": {
      "east": "lockedDoor"
    }
  },

  "kitchenButton": {
    "description": "Pushing the button, the door starts to lift. It jams halfway from the floor. The ship suddenly shakes violently. You notice the door above you rattling in the doorway, threatening to drop. You need to decide if you want to continue through the door or go back.",
    "direction": {
      "back": "doorEnd",
      "continue": "kitchen"
    }
  },

  "doorEnd": {
    "description": "You back away from the door to see it drop with a loud thud. You try pushing the button again, but nothing happens. Your eyes sting from the smoke and you start coughing. You try the other door in the corridor, but it is locked. You try to make it back to the crew quarters, but the smoke limits your vision. You stumble across the corridor only to collapse beside the ladder, the world fading before your eyes. -END-"
  },

  "kitchen": {
    "description": "You continue onwards and manage to crawl under the door just before the door collapses. As you push yourself off the ground you feel the ship vibrate underneath you. At this rate you’re not sure how the ship will last.",
    "action": {
      "room": "kitchen2"
    }
  },

  "kitchen2": {
    "description": "Looking around the small mess hall brings back happy memories. There's a small vent shaft on the wall to your right. Some emergency equipment has been hastily stashed in one corner of the room. The noise of the alarm is a constant sound in your ears.",
    "direction": {
      "vent": "vent1"
    },
    "items": {
      "equipment": ""
    }
  },

  "vent1": {
    "description": "You go over to the vent. As you try to open it you notice the vent is secured with four bolts. It looks like you will need some tools to open it.",
    "examine": {
      "room": "kitchen2",
      "equipment": "equipmentAquire"
    }
  },

  "equipmentAquire": {
    "description": "Most of the equipment looks broken but you manage to salvage a gas mask with a cracked eye lens and a wrench.",
    "action": {
      "search": "kitchen2"
    },
    "direction": {
      "vent": "vent2"
    }
  },

  "vent2": {
    "description": "With the door jammed you take your chances with the small vent. It is secured on the wall with four bolts.",
    "action": {
      "wrench": "corridorSmoke"
    },
  },

  "corridorSmoke": {
    "description": "Using the wrench, you managed to take the cover off the vent and climb through. You end up in the same corridor you were in previously. The smoke has gotten considerably worse. A gas mask would be useful here.",
    "action": {
      "search": "corriderSmokeDes",
      "mask": "corridorMask"
    }
  },

  "corridorSmokeDes": {
    "description": "You cannot see much in front of you. As far as you can tell the corridor looks the same as it did before only with considerably more smoke. It’s not safe to move without something to protect you from the smoke.",
    "action": {
      "mask": "corridorMask"
    }
  },

  "corridorMask": {
    "description": "Putting on the gas mask you can breathe normally. However, the smoke has greatly limited your vision. You remember the ladder being in the middle of the corridor. You don’t want to stay here any longer than necessary.",
    "direction": {
      "ladder": "ladder2"
    }
  },

  "ladder2": {
    "description": "You climb the ladder with little difficulty and manage to pull yourself up to the upper deck of the ship. You can hardly see a thing. You remember there being escape pods nearby.",
    "action": {
      "search": "corridorUpper"
    }
  },

  "corridorUpper": {
    "description": "You try to focus on your surroundings, but it is hard to see anything through the thick smoke. On the north-east wall you see an open door. Through your mask you can smell something burning. You need to leave this place.",
    "direction": {
      "door": "escapeRoom"
    }
  },

  "escapeRoom": {
    "description": "Stumbling across the corridor you make it to the door. There is smoke everywhere and the alarm continues to sound. The ship starts to tilt, and you sway on your feet trying to stay upright. Looking ahead, you notice one escape pod left in the room. The other crew members must have made it off the ship. You need to do the same.",
    "direction": {
      "escape": "endingGood"
    }
  },

  "endingGood": {
    "description": "Tripping over your feet you manage to secure yourself in the escape pod before something explodes in the corridor you were previously in. Hastily, you make sure the controls are correct. Although the gas mask makes it hard to see you manage to make sure everything is in order. Another crash. You are shaking as you hit the button that will deploy your escape pod. From your escape pod in space you see G-34B hurtling towards an unknown planet, the ship falling to pieces as it makes its decent. You take a few shaky breaths. You made it. You managed to escape cruiser ship G-34B."
  }
};

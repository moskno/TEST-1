let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };

//   1
const Mission1 = (militaryUnit) => { 
    const chiefOfStaff = militaryUnit.commandStructure.chiefOfStaff;
    return `${chiefOfStaff.rank} ${chiefOfStaff.name} ${chiefOfStaff.contact.phone}`
};
// בדיקה
// console.log(Mission1(militaryUnit))

// 2
const Mission2 = (militaryUnit) => {
    const keysArray = Object.keys(militaryUnit.personnel);
    const count = keysArray.length;
    return count
};
// בדיקה
// console.log(Mission2(militaryUnit));

// 3
const Mission3 = (NewDeployment, militaryUnit) =>{
    const currentDeployment = militaryUnit.currentDeployment;
    militaryUnit.history.push({
        eventDate: currentDeployment.estimatedEndDate,
        eventDescription: `${currentDeployment.mission} in ${currentDeployment.location}`
    })
    militaryUnit.currentDeployment = NewDeployment;
    return militaryUnit
}; 

// Example
const newDeployment = {
    location: "Europe",
    mission: "NATO Peacekeeping Operations",
    startDate: "2025-01-01",
    estimatedEndDate: "2025-12-31",
};
//   בדיקה
// console.log(Mission3(newDeployment, militaryUnit));
  
// 4
const Mission4 = (FirearmObject, militaryUnit) =>{
    const existFirearm = militaryUnit.equipment.firearms.find(
        (f) => f.type === FirearmObject.type && f.status === FirearmObject.status
    );
    if(existFirearm){
        existFirearm.quantity += FirearmObject.quantity; 
    }
    else{
        militaryUnit.equipment.firearms.push(FirearmObject)
    }
    return militaryUnit
};

// 5
const Mission5 = (militaryUnit) =>{
    const TotalDuration = militaryUnit.trainingPrograms.reduce(
        (sum, program) => sum + program.duration,
        0
    );
    return `${totalDuration}`;
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5
}



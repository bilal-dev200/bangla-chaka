import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";

export const CarInteriorDiagram = ({ selectedSidebar, damageDetails, setDamageDetails, selectedPart, setSelectedPart, selectedDamageType, setSelectedDamageType, selectedSubcategory, setSelectedSubcategory }) => {

  const selectableInteriorParts = [
    "Headliner",
    "Rear Left Door Panel",
    "Front Left Door Panel",
    "Front Right Door Panel",
    "Rear Right Door Panel",
    "Front Seat - Right",
    "Front Seat - Left",
    "Rear Seat - Left",
    "Rear Seat - Right",
    "Glove Box",
    "Center Console",
    "Steering Wheel",
    "Dashboard",
    "Floor Mat - Driver",
    "Floor Mat - Passenger",
    "Floor Mat - Rear Left",
    "Floor Mat - Rear Right",
    "Rear View Mirror",
    "Sunroof",
    "Gear Shift",
    "Infotainment System",
    "Rear Door Panel Right",
    "Rear Door Panel Left",
    "Front Door Panel Right",
    "Front Door Panel Left"
  ];

  // Dummy data for damage types, subcategories, and costs for interior parts
  const damageOptions = {
    "Steering Wheel": {
      types: [
        { name: "Wear and Tear", cost: 80 },
        { name: "Scratches", cost: 50 },
        { name: "Broken Buttons", cost: 120 },
      ],
      description: "Damage to the steering wheel, including cosmetic and functional issues.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 300 },
      ],
    },
    "Front Seat - Left": {
      types: [
        { name: "Torn Fabric/Leather", cost: 150 },
        { name: "Stains", cost: 70 },
        { name: "Broken Adjuster", cost: 200 },
      ],
      description: "Issues with the driver's seat, from upholstery to mechanical parts.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 400 },
      ],
    },
    "Front Seat - Right": {
      types: [
        { name: "Torn Fabric/Leather", cost: 130 },
        { name: "Stains", cost: 60 },
      ],
      description: "Damage to the front passenger seat.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 350 },
      ],
    },
    "Rear Seat - Left": {
      types: [
        { name: "Torn Fabric/Leather", cost: 100 },
        { name: "Stains", cost: 50 },
      ],
      description: "Damage to the rear left passenger seat.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 300 },
      ],
    },
    "Rear Seat - Right": {
      types: [
        { name: "Torn Fabric/Leather", cost: 100 },
        { name: "Stains", cost: 50 },
      ],
      description: "Damage to the rear right passenger seat.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 300 },
      ],
    },
    "Dashboard": {
      types: [
        { name: "Cracks", cost: 250 },
        { name: "Fading", cost: 100 },
        { name: "Scratches", cost: 80 },
      ],
      description: "Damage to the dashboard surface.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 600 },
      ],
    },
    "Center Console": {
      types: [
        { name: "Scratches", cost: 60 },
        { name: "Broken Latch", cost: 90 },
      ],
      description: "Damage to the center console.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 200 },
      ],
    },
    "Front Door Panel Left": {
      types: [
        { name: "Scratches", cost: 70 },
        { name: "Broken Handle", cost: 110 },
      ],
      description: "Damage to the interior driver side door panel.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 250 },
      ],
    },
    "Front Door Panel Right": {
      types: [
        { name: "Scratches", cost: 70 },
        { name: "Broken Handle", cost: 110 },
      ],
      description: "Damage to the interior passenger side door panel.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 250 },
      ],
    },
    "Rear Door Panel Left": {
      types: [
        { name: "Scratches", cost: 60 },
        { name: "Broken Handle", cost: 100 },
      ],
      description: "Damage to the interior rear left door panel.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 200 },
      ],
    },
    "Rear Door Panel Right": {
      types: [
        { name: "Scratches", cost: 60 },
        { name: "Broken Handle", cost: 100 },
      ],
      description: "Damage to the interior rear right door panel.",
      subcategories: [
        { name: "Repair", cost: 0 },
        { name: "Replace", cost: 200 },
      ],
    },
    "Floor Mat - Driver": {
      types: [{ name: "Tears", cost: 30 }, { name: "Stains", cost: 20 }],
      description: "Damage to the driver's floor mat.",
      subcategories: [{ name: "Replace", cost: 0 }],
    },
    "Floor Mat - Passenger": {
      types: [{ name: "Tears", cost: 30 }, { name: "Stains", cost: 20 }],
      description: "Damage to the passenger's floor mat.",
      subcategories: [{ name: "Replace", cost: 0 }],
    },
    "Floor Mat - Rear Left": {
      types: [{ name: "Tears", cost: 25 }, { name: "Stains", cost: 15 }],
      description: "Damage to the rear left floor mat.",
      subcategories: [{ name: "Replace", cost: 0 }],
    },
    "Floor Mat - Rear Right": {
      types: [{ name: "Tears", cost: 25 }, { name: "Stains", cost: 15 }],
      description: "Damage to the rear right floor mat.",
      subcategories: [{ name: "Replace", cost: 0 }],
    },
    "Rear View Mirror": {
      types: [{ name: "Cracked Glass", cost: 40 }, { name: "Loose Mount", cost: 60 }],
      description: "Damage to the rear view mirror.",
      subcategories: [{ name: "Replace", cost: 0 }],
    },
    "Sunroof": {
      types: [{ name: "Cracked Glass", cost: 300 }, { name: "Motor Malfunction", cost: 400 }],
      description: "Damage to the sunroof.",
      subcategories: [{ name: "Repair", cost: 0 }, { name: "Replace", cost: 800 }],
    },
    "Headliner": {
      types: [{ name: "Sagging", cost: 200 }, { name: "Stains", cost: 100 }],
      description: "Damage to the car's headliner.",
      subcategories: [{ name: "Repair", cost: 0 }, { name: "Replace", cost: 500 }],
    },
    "Gear Shift": {
      types: [{ name: "Worn Knob", cost: 50 }, { name: "Loose Linkage", cost: 150 }],
      description: "Damage to the gear shift.",
      subcategories: [{ name: "Repair", cost: 0 }, { name: "Replace", cost: 250 }],
    },
    "Infotainment System": {
      types: [{ name: "Scratched Screen", cost: 150 }, { name: "Malfunction", cost: 500 }],
      description: "Damage to the infotainment system.",
      subcategories: [{ name: "Repair", cost: 0 }, { name: "Replace", cost: 1000 }],
    },
    "Glove Box": {
      types: [{ name: "Broken Latch", cost: 70 }, { name: "Scratches", cost: 40 }],
      description: "Damage to the glove compartment.",
      subcategories: [{ name: "Repair", cost: 0 }, { name: "Replace", cost: 150 }],
    },
  };

  // Calculate total cost based on selected damage types and subcategories
  const calculateTotalCost = () => {
    let total = 0;
    for (const part in damageDetails) {
      const detail = damageDetails[part];
      if (detail.damageType) {
        total += detail.damageType.cost;
      }
      if (detail.subcategory) {
        total += detail.subcategory.cost;
      }
    }
    return total;
  };

  // Handler for clicking on SVG parts
  const handlePartClick = (event) => {
    const clickedValue = event.currentTarget.getAttribute('data-svg-clicked-val');
    console.log('clicked', clickedValue)
    if (selectedSidebar === 'Interior' && selectableInteriorParts.includes(clickedValue)) {
      setSelectedPart(prevSelectedPart => {
        if (prevSelectedPart === clickedValue) {
          const newDamageDetails = { ...damageDetails };
          delete newDamageDetails[clickedValue];
          setDamageDetails(newDamageDetails);
          setSelectedDamageType(null);
          setSelectedSubcategory(null);
          return null;
        } else {
          setSelectedDamageType(null);
          setSelectedSubcategory(null);
          return clickedValue;
        }
      });
    } else if (selectedSidebar !== 'Interior') {
      setSelectedPart(null);
      // setDamageDetails({});
      setSelectedDamageType(null);
      setSelectedSubcategory(null);
    }
  };

  // Handler for selecting multiple damage types
  const handleDamageTypeSelect = (type) => {
    if (!selectedPart) return;

    setDamageDetails((prevDetails) => {
      const existing = prevDetails[selectedPart]?.damageTypes || [];
      const alreadySelected = existing.some((d) => d.name === type.name);

      return {
        ...prevDetails,
        [selectedPart]: {
          ...prevDetails[selectedPart],
          // toggle selection
          damageTypes: alreadySelected
            ? existing.filter((d) => d.name !== type.name)
            : [...existing, type],
          subcategory: null, // reset subcategory when types change
        },
      };
    });
  };


  // Handler for selecting a subcategory
  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    if (selectedPart && damageDetails[selectedPart]) {
      setDamageDetails(prevDetails => ({
        ...prevDetails,
        [selectedPart]: {
          ...prevDetails[selectedPart],
          subcategory: subcategory,
        }
      }));
    }
  };

  // Handler for removing a damage entry from the list
  const handleRemoveDamage = (partName) => {
    setDamageDetails(prevDetails => {
      const newDetails = { ...prevDetails };
      delete newDetails[partName];
      if (selectedPart === partName) {
        setSelectedPart(null);
        setSelectedDamageType(null);
        setSelectedSubcategory(null);
      }
      return newDetails;
    });
  };

  // Clear selections when sidebar changes
  useEffect(() => {
    setSelectedPart(null);
    setSelectedDamageType(null);
    setSelectedSubcategory(null);
  }, [selectedSidebar, setSelectedPart, setSelectedDamageType, setSelectedSubcategory]);

  if (selectedSidebar !== 'Interior') {
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-start justify-center p-4 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-center p-4 w-full">
          {/* Left Section: Interior Vehicle Diagram SVG */}
          <div className="w-full lg:min-w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:pr-8">
            <svg
              version="1.1"
              id="Ext_Vehicle"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 240 240"
              xmlSpace="preserve"
              className="pr-damage-graphic ng-star-inserted w-full max-w-sm h-auto"
              style={{ enableBackground: 'new 0 0 240 240' }}
            >
              <rect
                data-svg-clicked-val="Center Console"
                x="115"
                y="78"
                width="7"
                height="13"
                className={`ExtSVGElem ${selectedPart === 'Center Console' ? 'selected-part' : ''}`}
                onClick={handlePartClick}
              />
              <rect
                data-svg-clicked-val="Glove Box"
                x="135"
                y="80"
                width="10"
                height="5"
                className={`ExtSVGElem ${selectedPart === 'Glove Box' ? 'selected-part' : ''}`}
                onClick={handlePartClick}
              />
              <rect
                data-svg-clicked-val="Front Seat - Right"
                x="125"
                y="95"
                width="25"
                height="25"
                className={`ExtSVGElem ${selectedPart === 'Front Seat - Right' ? 'selected-part' : ''}`}
                onClick={handlePartClick}
              />
              <rect
                data-svg-clicked-val="Front Seat - Left"
                x="85"
                y="95"
                width="25"
                height="25"
                className={`ExtSVGElem ${selectedPart === 'Front Seat - Left' ? 'selected-part' : ''}`}
                onClick={handlePartClick}
              />
              <rect
                data-svg-clicked-val="Rear Seat - Left"
                x="85"
                y="133"
                width="25"
                height="20"
                className={`ExtSVGElem ${selectedPart === 'Rear Seat - Left' ? 'selected-part' : ''}`}
                onClick={handlePartClick}
              />
              <rect
                data-svg-clicked-val="Rear Seat - Right"
                x="125"
                y="133"
                width="25"
                height="20"
                className={`ExtSVGElem ${selectedPart === 'Rear Seat - Right' ? 'selected-part' : ''}`}
                onClick={handlePartClick}
              />
              {/* Hood */}
              <g>
                <g>
                  <g>
                    <path
                      variable="hood"
                      id="ext_hood"
                      type="Hood"
                      side=""
                      data-svg-clicked-val="Hood"
                      d="M117.3,72.9c0.6,0,1.1,0,1.7,0c0.6,0,1.1,0,1.7,0c17.8,0,37.9,3.1,37.9,3.1
                          c2.7,0.4,4.6-1.5,4.2-4.2l-6.1-39.2c-0.4-2.7-3-4.9-5.8-4.9H86.1c-2.8,0-5.3,2.2-5.7,5l-5.3,39.1c-0.4,2.7,1.6,4.6,4.3,4.2
                          C79.4,76,99.5,72.9,117.3,72.9z"
                      className={`ExtSVGElem enabled ${selectedPart === 'Hood' ? 'selected-part' : ''}`}
                    // onClick={handlePartClick}
                    />
                  </g>
                </g>
              </g>
              {/* Trunk */}
              <g>
                <g>
                  <g>
                    <path
                      variable="trunk"
                      id="ext_trunk"
                      type="Trunk"
                      side=""
                      data-svg-clicked-val="Trunk"
                      d="M117.3,168.6c0.6,0,1.1,0,1.7,0c0.6,0,1.1,0,1.7,0c17.8,0,37.9-3.1,37.9-3.1
                          c2.7-0.4,4.6,1.5,4.1,4.2l-5.9,34.2c-0.5,2.7-3.1,4.9-5.9,4.9H86.1c-2.8,0-5.3-2.2-5.7-4.9l-5.1-34.2c-0.4-2.7,1.5-4.6,4.2-4.2
                          C79.4,165.5,99.5,168.6,117.3,168.6z"
                      className={`ExtSVGElem enabled ${selectedPart === 'Trunk' ? 'selected-part' : ''}`}
                    // onClick={handlePartClick}
                    />
                  </g>
                </g>
              </g>
              <g>
                {/* Left Rocker */}
                <g>
                  <path
                    variable="leftRocker"
                    id="ext_left-rocker"
                    side="Left"
                    data-svg-clicked-val="Left Rocker"
                    type="Rocker"
                    d="M37.5,157.3c0,1.5-1.2,2.8-2.6,2.8c-1.4,0-2.6-1.2-2.6-2.8V81.2c0-1.5,1.2-2.8,2.6-2.8
                    c1.4,0,2.6,1.2,2.6,2.8V157.3z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Left Rocker' ? 'selected-part' : ''}`}
                  // onClick={handlePartClick}
                  />
                </g>
                {/* Left Rear Door */}
                <g>
                  <path
                    variable="leftRearDoor"
                    id="ext_left-back-door"
                    type="Back Door"
                    side="Left"
                    data-svg-clicked-val="Rear Door Panel Left"
                    d="M72.4,156.5c0,2.8-2.2,5-5,5H45c-2.8,0-5-2.2-5-5v-29.7c0-2.8,2.2-5,5-5h22.4
                    c2.8,0,5,2.2,5,5L72.4,156.5L72.4,156.5z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Rear Door Panel Left' ? 'selected-part' : ''}`}
                    onClick={handlePartClick}
                  />
                </g>
                <g>
                  {/* Left Mirror */}
                  <g>
                    <path
                      variable="leftMirror"
                      id="ext_left-mirror"
                      type="Mirror"
                      side="Left"
                      data-svg-clicked-val="Left Mirror"
                      d="M71.7,87c0,3.5-2.9,6.4-6.4,6.4s-6.4-2.9-6.4-6.4v-4.1c0-3.5,2.9-3.4,6.4-3.4
                          s6.4-0.1,6.4,3.4V87z"
                      className={`ExtSVGElem enabled ${selectedPart === 'Left Mirror' ? 'selected-part' : ''}`}
                    // onClick={handlePartClick}
                    />
                  </g>
                  {/* Left Front Door */}
                  <path
                    variable="leftFrontDoor"
                    type="Front Door"
                    side="left"
                    data-svg-clicked-val="Front Door Panel Left"
                    id="ext_left-front-door"
                    d="M65.1,96.7c-4.9,0-8.9-4-8.9-8.9v-8h-11c-2.8,0-5,2.2-5,5v29.7c0,2.8,2.2,5,5,5h22.4c2.8,0,5-2.2,5-5h0v-22
                    C71.1,95,68.3,96.7,65.1,96.7z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Front Door Panel Left' ? 'selected-part' : ''}`}
                    onClick={handlePartClick}
                  />
                </g>
                {/* Left Fender */}
                <g>
                  <path
                    variable="leftFender"
                    id="ext_left-front-fender"
                    type="Front Fender"
                    side="left"
                    data-svg-clicked-val="Front Left Fender"
                    d="M67.7,32.5c-0.3-2.2-1.9-4-3.5-4s-4.8-0.2-7-0.4L45,26.9
                    c-2.2-0.2-4.7-0.4-5.5-0.4s-1.5,1.8-1.5,4V31c0,2.2,0.9,3.9,2,3.7c0,0,0,0,1,0c9,0,16.3,7.3,16.3,16.3c0,9-7.3,16.3-16.3,16.3
                    c-1,0-1,0-1,0c-1.1-0.2-2,1.5-2,3.7v0.3c0,2.2,0.7,4,1.5,4s3.3,0,5.5,0h21.2c2.2,0,4.7,0,5.5,0s1.3-1.8,1-4L67.7,32.5z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Front Left Fender' ? 'selected-part' : ''}`}
                  // onClick={handlePartClick}
                  />
                </g>
                {/* Left Front Wheel */}
                <circle
                  id="ext_left-front-wheel"
                  type="Front Wheel"
                  side="left"
                  data-svg-clicked-val="wheel"
                  cx="41"
                  cy="50.9"
                  r="14.6"
                  className={`ExtSVGElem ${selectedPart === 'wheel' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
                {/* Left Quarter Panel */}
                <g>
                  <path
                    variable="leftQuarterPanel"
                    id="ext_left-rear-fender"
                    type="Quarter Panel"
                    side="left"
                    data-svg-clicked-val="Rear Left Fender"
                    d="M69.1,203.2c-0.2,2.2-2.1,4.2-4.3,4.4l-1,0.1c-2.2,0.2-5.8,0.5-8,0.7l-10.2,0.6
                    c-2.2,0.1-4.7,0.2-5.5,0.2s-1.5-1.2-1.5-2.8c0-1.5,0.9-2.6,2-2.5c0,0,0,0,1,0c9,0,16.3-7.3,16.3-16.3c0-9-7.3-16.3-16.3-16.3
                    c-1,0-1,0-1,0c-1.1-0.2-2,1.4-2,3.4c0-2,0.7-3.7,1.5-3.7s3.3,0,5.5,0h19.2c2.2,0,4.7,0,5.5,0s1.4,1.8,1.2,4L69.1,203.2z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Rear Left Fender' ? 'selected-part' : ''}`}
                  // onClick={handlePartClick}
                  />
                </g>
                {/* Left Rear Wheel */}
                <circle
                  id="ext_left-rear-wheel"
                  type="Rear Wheel"
                  side="left"
                  data-svg-clicked-val="Rear Left Wheel"
                  cx="41.7"
                  cy="187.7"
                  r="14.6"
                  className={`ExtSVGElem ${selectedPart === 'Rear Left Wheel' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
              <g>
                {/* Right Rocker */}
                <g>
                  <path
                    variable="rightRocker"
                    id="ext_right-rocker"
                    type="Rocker"
                    side="right"
                    data-svg-clicked-val="Right Rocker"
                    d="M201.2,81.2c0-1.5,1.2-2.8,2.6-2.8c1.4,0,2.6,1.2,2.6,2.8v76.1
                    c0,1.5-1.2,2.8-2.6,2.8c-1.4,0-2.6-1.2-2.6-2.8V81.2z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Right Rocker' ? 'selected-part' : ''}`}
                  // onClick={handlePartClick}
                  />
                </g>
                {/* Right Rear Door */}
                <g>
                  <path
                    variable="rightRearDoor"
                    id="ext_right-back-door"
                    type="Back Door"
                    side="right"
                    data-svg-clicked-val="Rear Door Panel Right"
                    d="M166.3,156.5v-29.7c0-2.8,2.2-5,5-5h22.4c2.8,0,5,2.2,5,5v29.7c0,2.8-2.2,5-5,5
                    h-22.4C168.5,161.5,166.3,159.3,166.3,156.5L166.3,156.5z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Rear Door Panel Right' ? 'selected-part' : ''}`}
                    onClick={handlePartClick}
                  />
                </g>
                <g>
                  {/* Right Mirror */}
                  <g>
                    <path
                      variable="rightMirror"
                      id="ext_right-mirror"
                      type="Mirror"
                      side="right"
                      data-svg-clicked-val="Right Mirror"
                      d="M167,82.9c0-3.5,2.9-3.4,6.4-3.4c3.5,0,6.4-0.1,6.4,3.4V87c0,3.5-2.9,6.4-6.4,6.4
                          c-3.5,0-6.4-2.9-6.4-6.4V82.9z"
                      className={`ExtSVGElem enabled ${selectedPart === 'Right Mirror' ? 'selected-part' : ''}`}
                    // onClick={handlePartClick}
                    />
                  </g>
                  {/* Right Front Door */}
                  <path
                    variable="rightFrontDoor"
                    type="Front Door"
                    side="right"
                    data-svg-clicked-val="Front Door Panel Right"
                    id="ext_right-front-door"
                    d="M173.5,96.7c4.9,0,8.9-4,8.9-8.9v-8h11c2.8,0,5,2.2,5,5v29.7c0,2.8-2.2,5-5,5H171c-2.8,0-5-2.2-5-5h0v-22
                    C167.6,95,170.4,96.7,173.5,96.7z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Front Door Panel Right' ? 'selected-part' : ''}`}
                    onClick={handlePartClick}
                  />
                </g>
                {/* Right Fender */}
                <g>
                  <path
                    variable="rightFender"
                    id="ext_right-front-fender"
                    type="Front Fender"
                    side="right"
                    data-svg-clicked-val="Front Right Fender"
                    d="M166,71.4c-0.3,2.2,0.2,4,1,4s3.3,0,5.5,0h21.2c2.2,0,4.7,0,5.5,0
                    c0.8,0,1.5-1.8,1.5-4V71c0-2.2-0.9-3.9-2-3.7c0,0,0,0-1,0c-9,0-16.3-7.3-16.3-16.3c0-9,7.3-16.3,16.3-16.3c1,0,1,0,1,0
                    c1.1,0.2,2-1.5,2-3.7v-0.5c0-2.2-0.7-4-1.5-4s-3.3,0.2-5.5,0.4l-12.2,1.2c-2.2,0.2-5.3,0.4-7,0.4c-1.6,0-3.2,1.8-3.5,4L166,71.4z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Front Right Fender' ? 'selected-part' : ''}`}
                  // onClick={handlePartClick}
                  />
                </g>
                {/* Right Front Wheel */}
                <circle
                  id="ext_right-front-wheel"
                  type="Front Wheel"
                  side="right"
                  data-svg-clicked-val="wheel"
                  cx="197.7"
                  cy="50.9"
                  r="14.6"
                  className={`ExtSVGElem ${selectedPart === 'wheel' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
                {/* Right Quarter Panel */}
                <g>
                  <path
                    variable="rightQuarterPanel"
                    id="ext_right-rear-fender"
                    type="Quarter Panel"
                    side="right"
                    data-svg-clicked-val="Rear Right Fender"
                    d="M167.1,168.3c-0.2,2.2,0.4-4,1.2-4s3.3,0,5.5,0H193c2.2,0,4.7,0,5.5,0
                    s1.5,1.6,1.5,3.7c0,2-0.9,3.5-2,3.4c0,0,0,0-1,0c-9,0-16.3,7.3-16.3,16.3c0,9,7.3,16.3,16.3,16.3c1,0,1,0,1,0c1.1-0.2,2,1,2,2.5
                    c0,1.5-0.7,2.8-1.5,2.8s-3.3-0.1-5.5-0.2l-10.2-0.6c-2.2-0.1-5.8-0.4-8-0.7l-1-0.1c-2.2-0.2-4.1-2.2-4.3-4.4L167.1,168.3z"
                    className={`ExtSVGElem enabled ${selectedPart === 'Rear Right Fender' ? 'selected-part' : ''}`}
                  // onClick={handlePartClick}
                  />
                </g>
                {/* Right Rear Wheel */}
                <circle
                  id="ext_right-rear-wheel"
                  type="Rear Wheel"
                  side="right"
                  data-svg-clicked-val="wheel"
                  cx="197"
                  cy="187.7"
                  r="14.6"
                  className={`ExtSVGElem ${selectedPart === 'wheel' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
              {/* Front Glass - Right */}
              {/* <polygon
              type="Front Glass"
              side="right"
              data-svg-clicked-val="right front glass"
              points="162.6,81.7 162.6,120.3 145.4,120.3 145.4,95.9 145.4,95.9"
              className={`ExtSVGElem ${selectedPart === 'right front glass' ? 'selected-part' : ''}`}
              onClick={handlePartClick}
            /> */}
              {/* Back Glass - Right */}
              {/* <polygon
              type="Back Glass"
              side="right"
              data-svg-clicked-val="right rear glass"
              points="162.6,161.3 162.6,122.7 145.4,122.7 145.4,147.1 145.4,147.1"
              className={`ExtSVGElem ${selectedPart === 'right rear glass' ? 'selected-part' : ''}`}
              onClick={handlePartClick}
            /> */}
              <g>
                {/* Rear Bumper (Main Shape) */}
                <path
                  variable="rearBumper"
                  id="ext_rear-bumper"
                  type="Rear Bumper"
                  side=""
                  data-svg-clicked-val="Rear Bumper"
                  d="M80.1,210.2c-0.6,0-1,0.4-1,1v6.3c0,0.6,0.4,0,1,0H82c0.6,0,1,0.6,1,0v-0.6
                  c0-0.6,0.4-1,1-1h14.5c0.6,0,1,0.4,1,1v0.6c0,0.6,0.4,0,1,0h34.8c0.6,0,1,0.6,1,0v-0.6c0-0.6,0.4-1,1-1h14.5c0.6,0,1,0.4,1,1v0.6
                  c0,0.6,0.4,0,1,0h1.9c0.6,0,1,0.6,1,0v-6.3c0-0.6-0.4-1-1-1H80.1z"
                  className={`ExtSVGElem enabled ${selectedPart === 'Rear Bumper' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
              <g>
                {/* Rear Left Light */}
                <path
                  variable="rearLeftLight"
                  id="ext_rear-left-light"
                  type="Rear Light"
                  side="left"
                  data-svg-clicked-val="Rear Left Light"
                  d="M99,223c0,2.1-0.9,3.8-2,3.8H85.3c-1.1,0-2-1.7-2-3.8v-1.9c0-2.1,0.9-3.8,2-3.8H97
                  c1.1,0,2,1.7,2,3.8L99,223L99,223z"
                  className={`ExtSVGElem enabled ${selectedPart === 'Rear Left Light' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
              <g>
                {/* Rear Right Light */}
                <path
                  variable="rearRightLight"
                  id="ext_rear-right-light"
                  type="Rear Light"
                  side="right"
                  data-svg-clicked-val="Rear Right Light"
                  d="M152.4,223c0,2.1-0.9,3.8-2,3.8h-11.7c-1.1,0-2-1.7-2-3.8v-1.9c0-2.1,0.9-3.8,2-3.8
                  h11.7c1.1,0,2,1.7,2,3.8L152.4,223L152.4,223z"
                  className={`ExtSVGElem enabled ${selectedPart === 'Rear Right Light' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
              <g>
                <path
                  id="ext_right-front-fender"
                  type="Front Fender"
                  side="right"
                  data-svg-clicked-val="Front Right Fender"
                  d="M166.9,72.6"
                  className={`ExtSVGElem ${selectedPart === 'Front Right Fender' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
              {/* Front Bumper (Main Shape) */}
              <path
                variable="frontBumper"
                type="Front Bumper"
                side=""
                data-svg-clicked-val="Front Bumper"
                id="ext_front-bumper"
                d="M156.9,17.2h-2.3c-1.9,2.3-4.7,3.7-7.9,3.7s-6-1.5-7.9-3.7H99c-1.9,2.3-4.7,3.7-7.9,3.7c-3.2,0-6-1.5-7.9-3.7
                h-2c-0.5,0-1,0.4-1,1v2.3c0,0.6,0.5,5,1,5h75.7c0.6,0,1-4.4,1-5v-2.3C157.9,17.6,157.4,17.2,156.9,17.2z"
                className={`ExtSVGElem enabled ${selectedPart === 'Front Bumper' ? 'selected-part' : ''}`}
              // onClick={handlePartClick}
              />
              <g>
                {/* Left Front Light */}
                <path
                  variable="leftFrontLight"
                  id="ext_front-left-light"
                  type="Front Light"
                  side="Left"
                  data-svg-clicked-val="Front Left Light"
                  d="M91.3,6.4c-5.7,0-11.4,4-10.2,4.9c4.4,3.2,4.6,7.3,10.2,7.3c5.7,0,5.7-4.1,10.2-7.3
                  C102.2,10.7,96.9,6.4,91.3,6.4z"
                  className={`ExtSVGElem enabled ${selectedPart === 'Front Left Light' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
              <g>
                {/* Right Front Light */}
                <path
                  variable="rightFrontLight"
                  id="ext_front-right-light"
                  type="Front Light"
                  side="Right"
                  data-svg-clicked-val="Front Right Light"
                  d="M146.7,6.4c-5.7,0-11.4,4-10.2,4.9c4.4,3.2,4.6,7.3,10.2,7.3c5.7,0,5.7-4.1,10.2-7.3
                  C157.7,10.7,152.3,6.4,146.7,6.4z"
                  className={`ExtSVGElem enabled ${selectedPart === 'Front Right Light' ? 'selected-part' : ''}`}
                // onClick={handlePartClick}
                />
              </g>
            </svg>
          </div>

          {/* Right Section: Damage Selection UI and Total Cost */}
          <div className="w-full lg:min-w-1/2 flex flex-col items-center lg:items-start lg:pl-8">
            {selectedPart && damageOptions[selectedPart] && (
              <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{selectedPart} - Damage Type</h3>

                {/* Damage Types */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {damageOptions[selectedPart].types.map((type) => {
                    const isSelected =
                      damageDetails[selectedPart]?.damageTypes?.some(
                        (t) => t.name === type.name
                      );

                    return (
                      <button
                        type="button"
                        key={type.name}
                        onClick={() => handleDamageTypeSelect(type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
          ${isSelected
                            ? "bg-black text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          }`}
                      >
                        {type.name}
                      </button>
                    );
                  })}
                </div>


                {/* Damage Description */}
                <p className="text-sm text-gray-600 mb-6">{damageOptions[selectedPart].description}</p>

                {/* Subcategory Selection */}
                {/* {selectedDamageType && damageOptions[selectedPart].subcategories && (
                <>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Select A Subcategory</h4>
                  <div className="flex flex-wrap gap-2">
                    {damageOptions[selectedPart].subcategories.map((subcategory) => (
                      <button
                        key={subcategory.name}
                        onClick={() => handleSubcategorySelect(subcategory)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                          ${selectedSubcategory && selectedSubcategory.name === subcategory.name
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                          }`}
                      >
                        {subcategory.name}
                      </button>
                    ))}
                  </div>
                </>
              )} */}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default CarInteriorDiagram;
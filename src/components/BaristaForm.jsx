import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../assets/drinks.json";
const BaristaForm = () => {
  const [currentDrink, setCurrentDrink] = useState("");

  const [trueRecipe, setTrueRecipe] = useState({});
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };
  const [correct_temp, setCheckedTemperature] = useState("");
  const [correct_syrup, setCheckedSyrup] = useState("");
  const [correct_milk, setCheckedMilk] = useState("");
  const [correct_blended, setCheckedBlended] = useState("");
  const onNewDrink = () => {
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });
    setCheckedTemperature("");
    setCheckedSyrup("");
    setCheckedMilk("");
    setCheckedBlended("");
    getNextDrink();
  };
  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };
  const onCheckAnswer = () => {
    if (trueRecipe.temp != inputs["temperature"]) {
      setCheckedTemperature("wrong");
    } else {
      setCheckedTemperature("correct");
    }
    if (trueRecipe.syrup != inputs["syrup"]) {
        setCheckedTemperature("wrong");
      } else {
        setCheckedTemperature("correct");
      }
      if (trueRecipe.milk != inputs["milk"]) {
        setCheckedTemperature("wrong");
      } else {
        setCheckedTemperature("correct");
      }
      if (trueRecipe.blended != inputs["blended"]) {
        setCheckedTemperature("wrong");
      } else {
        setCheckedTemperature("correct");
      }
  };
  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header"></h2>
      </div>
      <button className="button newdrink" onClick={onNewDrink}>
        🔄
      </button>
      <form action="">
        <h3>Temperature</h3>
        <div className={`answer-space ${correct_temp}`}>{inputs["temperature"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="temperature"
          choices={ingredients["temperature"]}
          checked={inputs["temperature"]}
        />

        <h3>syrup</h3>
        <div className={`answer-space ${correct_temp}`}>{inputs["syrup"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="syrup"
          choices={ingredients["syrup"]}
          checked={inputs["syrup"]}
        />
        <h3>blended</h3>
        <div className={`answer-space ${correct_temp}`}>{inputs["blended"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="blended"
          choices={ingredients["blended"]}
          checked={inputs["blended"]}
        />
        <h3>Temperature</h3>
        <div className={`answer-space ${correct_temp}`}>{inputs["blended"]}</div>
        <RecipeChoices
          handleChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          label="blended"
          choices={ingredients["blended"]}
          checked={inputs["blended"]}
        />
      </form>
      <button className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button className="button submit" onClick={onNewDrink}>
        New Drink
      </button>
    </div>
  );
};

export default BaristaForm;

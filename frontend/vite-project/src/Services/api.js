const BASE_URL = "http://localhost:5000/api";

// SignupUser

export const signupUser = async (userData) => {

  try {

    const response = await fetch(
      `${BASE_URL}/auth/signup`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("Signup Error", error);

  }
};


// Login User


export const loginUser = async (userData) => {

  try {

    const response = await fetch(
      `${BASE_URL}/auth/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("Login Error", error);

  }
};



// Get All Projects


export const getProjects = async () => {

  try {

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/projects`,
      {
        headers: {
          Authorization: token
        }
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("Project Fetch Error", error);

  }
};



// Create Project


export const createProject = async (projectData) => {

  try {

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/projects`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },

        body: JSON.stringify(projectData)
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("Project Create Error", error);

  }
};


// Get All Tasks


export const getTasks = async () => {

  try {

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/tasks`,
      {
        headers: {
          Authorization: token
        }
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("Task Fetch Error", error);

  }
};


// Create Task


export const createTask = async (taskData) => {

  try {

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/tasks`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },

        body: JSON.stringify(taskData)
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("Task Create Error", error);

  }
};


// Update Task Status


export const updateTask = async (id, updatedData) => {

  try {

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${BASE_URL}/tasks/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },

        body: JSON.stringify(updatedData)
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("Task Update Error", error);

  }
};
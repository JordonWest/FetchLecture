async function getFetch() {
  try {
    const response = await fetch('http://127.0.0.1:5000');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function postFetch() {
  try {
    const response = await fetch('http://127.0.0.1:5000', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

export default {
  getFetch,
  postFetch
}
export default function JokesNewRoute() {

    return (
      <form method="post">
        <div>
            <label htmlFor="setup">Setup</label>
            <input type="text" name="setup" id="setup" />
        </div>
        <div>
            <label htmlFor="punchline">Punchline</label>
            <input type="text" name="punchline" id="punchline" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}
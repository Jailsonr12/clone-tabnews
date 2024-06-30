import database from "infra/database";
async function clearDatabase() {
  await database.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
}

beforeAll(clearDatabase);

test("Get to  /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "GET",
  });
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});

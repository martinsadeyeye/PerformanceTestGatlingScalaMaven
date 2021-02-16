package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class AddUserSimulation extends Simulation {

  //http conf
  val httpconf = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  //scenario
  val scenar = scenario("Add User Scenario")
    .exec(http("Add User Request")
      .post("/api/users")
      .body(RawFileBody("./src/test/resources/payload/AddUser.json")).asJson
      .header("content-type", "application/json")
      .check(status is 201))

    .pause(3)

    .exec(http("get user request")
      .get("/api/users/2")
      .check(status is 200))

    .pause(3)

    .exec(http("get All0 user request")
      .get("/api/users?page=2")
      .check(status is 200))

  //setup
  setUp(scenar.inject(atOnceUsers(1))).protocols(httpconf)
}

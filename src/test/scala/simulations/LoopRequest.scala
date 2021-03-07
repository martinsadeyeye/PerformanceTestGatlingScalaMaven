package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._


class LoopRequest extends Simulation {


  //http conf
  val httpconf = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  def getAllUsersRequest() = {
    repeat(2) {
      exec(http("get all users request")
        .get("/api/users")
        .check(status.is(200)))
    }
  }


  def getAUsersRequest() = {
    repeat(2) {
      exec(http("get a users request")
        .get("/api/user?page=2")
        .check(status.is(200)))
    }
  }


  def addUsersRequest() = {
    repeat(2) {
      exec(http("Add User Request")
        .post("/api/users")
        .body(RawFileBody("./src/test/resources/payload/AddUser.json")).asJson
        .header("content-type", "application/json")
        .check(status.is(201)))
    }
  }


  val scn = scenario("user request scenario")
    .exec(getAllUsersRequest())
    .pause(2)
    .exec(getAUsersRequest())
    .pause(2)
    .exec(addUsersRequest())


  setUp(scn.inject(atOnceUsers(1))).protocols(httpconf)


}

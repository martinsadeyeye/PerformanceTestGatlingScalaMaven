package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps


class LoadSimulationWithFixedDuration extends Simulation {


  //http conf
  val httpconf = http.proxy(Proxy("localhost", 8888))
    .baseUrl("https://reqres.in")
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
      exec(http("Add a User Request")
        .post("/api/users")
        .body(RawFileBody("./src/test/resources/payload/AddUser.json")).asJson
        .header("content-type", "application/json")
        .check(status.is(201)))
    }
  }


  val scn = scenario("Fixed Duration Load Simulation")
      .forever(){
        exec(getAllUsersRequest())
          .pause(5)
          .exec(getAUsersRequest())
          .pause(5)
          .exec(addUsersRequest())

      }

  setUp(scn.inject(nothingFor(5),
    atOnceUsers(10),
    rampUsers(50) during (30 seconds)
  ).protocols(httpconf)
  ).maxDuration(1 minute)
}

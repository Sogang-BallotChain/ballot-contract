const Migrations = artifacts.require("Migrations");
const Ballot = artifacts.require("Ballot");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Ballot);
};

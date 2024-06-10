#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
async function main() {
  const inquirer = (await import("inquirer")).default;
  program
    .version("1.0.0")
    .argument("<project-name>", "my-backend")
    .action(async (projectName) => {
      const answers = await inquirer.prompt([
        {
          type: "confirm",
          name: "typescript",
          message: "Do you want to install TypeScript?",
          default: false,
        },
      ]);

      const templatePath = answers.typescript
        ? path.resolve(__dirname, "backend-templates/ts-template")
        : path.resolve(__dirname, "backend-templates/js-template");

      const targetPath = path.join(process.cwd(), projectName);

      try {
        await fs.copy(templatePath, targetPath);

        // Update the package.json name field
        const packageJsonPath = path.join(targetPath, "package.json");
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.name = projectName;
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

        console.log(`Project ${projectName} created successfully.`);

        if (answers.typescript) {
          execSync("npm install", { cwd: targetPath, stdio: "inherit" });
          console.log("TypeScript and dependencies installed successfully.");
        }
      } catch (err) {
        console.error("Error creating project:", err);
      }

      // Post-installation instructions
      console.log(`\nNext steps:`);
      if (projectName !== ".") {
        console.log(`cd ${projectName}`);
      }
      console.log(`npm install`);
      console.log(`npm run dev`);
    });

  program.parse(process.argv);
}

main().catch((error) => console.error(error));

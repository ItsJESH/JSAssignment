
function calculateCube() {
    const side = document.getElementById("cubeSide").value;
    const volume = Math.pow(side, 3);
    const surfaceArea = 6 * Math.pow(side, 2);
    document.getElementById("cubeResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("cubeVolumeFormula").innerText = `Formula\n Volume = side³\nSurface Area = 6 * side²`;
}

function calculateSphere() {
    const radius = document.getElementById("sphereRadius").value;
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
    document.getElementById("sphereResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("sphereVolumeFormula").innerText = `Formula\n Volume = 4/3 * π * radius³\nSurface Area = 4 * π * radius²`;
}

function calculateCylinder() {
    const radius = document.getElementById("cylinderRadius").value;
    const height = document.getElementById("cylinderHeight").value;
    const volume = Math.PI * Math.pow(radius, 2) * height;
    const surfaceArea = 2 * Math.PI * radius * (radius + height);
    document.getElementById("cylinderResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("cylinderVolumeFormula").innerText = `Formula\n Volume = π * radius² * height\nSurface Area = 2 * π * radius * (radius + height)`;
}

function calculateCone() {
    const radius = document.getElementById("coneRadius").value;
    const height = document.getElementById("coneHeight").value;
    const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    const surfaceArea = Math.PI * radius * (radius + slantHeight);
    document.getElementById("coneResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("coneVolumeFormula").innerText = `Formula\n Volume = 1/3 * π * radius² * height\nSurface Area = π * radius * (radius + slantHeight)`;
}

function calculateRectPrism() {
    const length = document.getElementById("rectPrismLength").value;
    const width = document.getElementById("rectPrismWidth").value;
    const height = document.getElementById("rectPrismHeight").value;
    const volume = length * width * height;
    const surfaceArea = 2 * (length * width + width * height + height * length);
    document.getElementById("rectPrismResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("rectPrismVolumeFormula").innerText = `Formula\n Volume = length * width * height\nSurface Area = 2 * (length * width + width * height + height * length)`;
}

function calculatePyramid() {
    const base = document.getElementById("pyramidBase").value;
    const height = document.getElementById("pyramidHeight").value;
    const volume = (1/3) * Math.pow(base, 2) * height;
    const surfaceArea = Math.pow(base, 2) + 2 * base * Math.sqrt(Math.pow(height, 2) + Math.pow(base / 2, 2));
    document.getElementById("pyramidResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("pyramidVolumeFormula").innerText = `Formula\n Volume = 1/3 * base² * height\nSurface Area = base² + 2 * base * slant height`;
}

function calculateTetrahedron() {
    const edge = document.getElementById("tetrahedronEdge").value;
    const volume = (Math.pow(edge, 3)) / (6 * Math.sqrt(2));
    document.getElementById("tetrahedronResult").innerText = `Result\nVolume: ${volume}`;
    document.getElementById("tetrahedronVolumeFormula").innerText = `Formula\n Volume = (edge³) / (6 * √2)`;
}

function calculateHemisphere() {
    const radius = document.getElementById("hemisphereRadius").value;
    const volume = (2/3) * Math.PI * Math.pow(radius, 3);
    const surfaceArea = 3 * Math.PI * Math.pow(radius, 2);
    document.getElementById("hemisphereResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("hemisphereVolumeFormula").innerText = `Formula\n Volume = 2/3 * π * radius³\nSurface Area = 3 * π * radius²`;
}

function calculateTorus() {
    const radius = document.getElementById("torusRadius").value;
    const tubeRadius = document.getElementById("torusTubeRadius").value;
    const volume = 2 * Math.PI * Math.PI * radius * Math.pow(tubeRadius, 2);
    const surfaceArea = 4 * Math.PI * Math.PI * radius * tubeRadius;
    document.getElementById("torusResult").innerText = `Result\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
    document.getElementById("torusVolumeFormula").innerText = `Formula\n Volume = 2 * π² * radius * tube radius²\nSurface Area = 4 * π² * radius * tube radius`;
}
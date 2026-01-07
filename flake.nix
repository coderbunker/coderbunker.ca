{
  description = "Gatsby development environment for coderbunker.ca";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            bun
            
            # Native dependencies often needed for Gatsby/Sharp/Node-gyp
            python3
            pkg-config
            vips
            libpng
            autoconf
            automake
            nasm
          ];

          shellHook = ''
            echo "Welcome to the Coderbunker.ca development environment!"
            echo "Node version: $(node --version)"
            echo "Bun version: $(bun --version)"
            export PATH=$PWD/node_modules/.bin:$PATH
          '';
        };
      }
    );
}

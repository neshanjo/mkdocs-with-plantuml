# mkdocs-with-plantuml

This is a demo project for using PlantUML with MkDocs Material theme. It is configured to process both `*.puml` files and inline PlantUML code blocks (` ```plantuml ... ``` `) inside Markdown files.

## Run the example

To set up the project, follow these steps:

1. **Install Python**: Ensure you have Python3 installed on your system. You can download it from [python.org](https://www.python.org/).

2. **Create a virtual environment**:

    ```sh
    python3 -m venv .venv
    ```

3. **Activate the virtual environment**:
    - On Windows:

        ```sh
        .venv\Scripts\activate
        ```

    - On macOS and Linux:

        ```sh
        source .venv/bin/activate
        ```

4. **Install the required packages**:

    ```sh
    pip install -r requirements.txt
    ```

5. **Run the MkDocs server**:

    ```sh
    mkdocs serve
    ```

6. **Open the browser**:

    Open your browser and go to <http://localhost:8000> to see the MkDocs site.

## Noteworthy configuration

The configuration for this project includes several noteworthy settings:

1. **MkDocs Configuration**:
    - The `mkdocs.yml` file is configured to use the Material theme, which provides a modern and responsive design for your documentation.
    - The `docs_dir` is set to `documentation`, which is the directory where your Markdown files are stored.
    - For more details on MkDocs and its configuration, refer to the [MkDocs documentation](https://www.mkdocs.org/).

2. **Material Theme**:
    - The theme is set to `material`, and it includes the `navigation.tabs` feature for better navigation.
    - For more information on the Material theme, visit the [MkDocs Material documentation](https://squidfunk.github.io/mkdocs-material/).

3. **Extra JavaScript**:
        - The `extra_javascript` configuration includes a custom JavaScript file `handle_umlaut_anchors.js`. This script ensures that Markdown link anchors containing umlauts work correctly in both VSCode preview and when processed by Python-Markdown. It replaces umlauts in link anchors with their non-accented counterparts.
        - For more details on how this script works, refer to the `handle_umlaut_anchors.js` file.

4. **Markdown Extensions**:
    - The `plantuml_markdown` extension is included to handle inline PlantUML code blocks within your Markdown files.
    - For more information on the PlantUML Markdown extension, visit the [PlantUML Extension for Python-Markdown documentation](https://github.com/mikitex70/plantuml-markdown)

5. **Plugins**:
    - The `search` plugin is enabled to provide search functionality within your documentation. It is enabled by default, but must be explicitly mentioned in the `plugins` section of the `mkdocs.yml` file when other plugins are used.
    - The `build_plantuml` plugin is configured to process PlantUML files. It is set to render diagrams locally using the PlantUML binary located at `/opt/homebrew/bin/plantuml`. Change this according to your local setup. The diagrams are stored in the `documentation/diagrams` directory and output as PNG files in the `out` folder.
    - Alternatively, a PlantUML server can be used by setting the `plantuml_server` configuration in the `mkdocs.yml` file.

## Disadvantages

One disadvantage of this setup is that it takes quite a long time to generate the preview, about 13 seconds. This makes live editing with browser preview not very practical. This does not change even when using a PlantUML server.

## TODO

Check if the `diagrams/include` directory can or should be used for PlantUML includes.

## Further Resources

- [MkDocs catalog](https://github.com/mkdocs/catalog) - "A list of awesome MkDocs projects and plugins"

## License

(C) by Johannes Schneider, 2024. Code and configuration is licensed under the MIT license. Text, diagrams and images are licensed under CC BY-SA 4.0. For more information, see the [LICENSE.md](LICENSE.md) file.

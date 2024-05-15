return {
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      tailwindcss = {
        -- exclude a filetype from the default_config
        filetypes_exclude = { "markdown" },
        -- add additional filetypes to the default_config
        filetypes_include = {},
        -- to fully override the default_config, change the below
        -- filetypes = {}
      },
    },
    setup = {
      tailwindcss = function(_, opts)
        local tw = require("lspconfig.server_configurations.tailwindcss")
        opts.filetypes = opts.filetypes or {}

        -- Add default filetypes
        vim.list_extend(opts.filetypes, tw.default_config.filetypes)

        -- Remove excluded filetypes
        --- @param ft string
        opts.filetypes = vim.tbl_filter(function(ft)
          return not vim.tbl_contains(opts.filetypes_exclude or {}, ft)
        end, opts.filetypes)

        -- Add additional filetypes
        vim.list_extend(opts.filetypes, opts.filetypes_include or {})
      end,
    },
  },
  opts = {
    ---@type lspconfig.options
    servers = {
      eslint = {
        settings = {
          -- helps eslint find the eslintrc when it's placed in a subfolder instead of the cwd root
          workingDirectories = { mode = "auto" },
        },
      },
    },
    setup = {
      eslint = function()
        local function get_client(buf)
          return LazyVim.lsp.get_clients({ name = "eslint", bufnr = buf })[1]
        end

        local formatter = LazyVim.lsp.formatter({
          name = "eslint: lsp",
          primary = false,
          priority = 200,
          filter = "eslint",
        })

        -- Use EslintFixAll on Neovim < 0.10.0
        if not pcall(require, "vim.lsp._dynamic") then
          formatter.name = "eslint: EslintFixAll"
          formatter.sources = function(buf)
            local client = get_client(buf)
            return client and { "eslint" } or {}
          end
          formatter.format = function(buf)
            local client = get_client(buf)
            if client then
              local diag = vim.diagnostic.get(buf, { namespace = vim.lsp.diagnostic.get_namespace(client.id) })
              if #diag > 0 then
                vim.cmd("EslintFixAll")
              end
            end
          end
        end

        -- register the formatter with LazyVim
        LazyVim.format.register(formatter)
      end,
    },
  }
}

import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="w-full" style={{ backgroundColor: "#0A0A0A", color: "#FCFAFA" }}>
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-16 md:py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:opacity-70 uppercase" style={{ color: "#FCFAFA" }}
            >
              Robert William Benge
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus" style={{ color: "#FCFAFA" }}>
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 txt-small"
                        style={{ color: "#FCFAFA" }}
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:opacity-70",
                            children && "txt-small-plus"
                          )}
                          style={{ color: "#FCFAFA" }}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:opacity-70"
                                    style={{ color: "#FCFAFA" }}
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus" style={{ color: "#FCFAFA" }}>
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 txt-small",
                    { "grid-cols-2": (collections?.length || 0) > 3 }
                  )}
                  style={{ color: "#FCFAFA" }}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:opacity-70"
                        style={{ color: "#FCFAFA" }}
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus" style={{ color: "#FCFAFA" }}>Customer Service</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small" style={{ color: "#FCFAFA" }}>
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-70"
                    style={{ color: "#FCFAFA" }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-70"
                    style={{ color: "#FCFAFA" }}
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-70"
                    style={{ color: "#FCFAFA" }}
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between" style={{ color: "#FCFAFA", opacity: 0.6 }}>
          <p className="txt-compact-small">
            © {new Date().getFullYear()} Robert William Benge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

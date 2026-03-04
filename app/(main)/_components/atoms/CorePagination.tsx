"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IPaginationProps {
  totalElement: number;
  size: number;
  totalPages: number;
  className?: string;
}

const CorePagination = ({
  totalElement = 0,
  size = 2,
  totalPages,
  className,
}: IPaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Math.max(0, Number(searchParams.get("page")) || 0);

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        {/* Prev */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              router.push(createPageUrl(Math.max(0, currentPage - 1)))
            }
            aria-disabled={currentPage === 0}
            className={
              currentPage === 0 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* Pages */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index;

          if (
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1
          ) {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={page === currentPage}
                  aria-disabled={page === currentPage}
                  onClick={(e) => {
                    if (page === currentPage) {
                      e.preventDefault();
                    } else {
                      router.push(createPageUrl(page));
                    }
                  }}
                  className={
                    page === currentPage ? "pointer-events-none opacity-50" : ""
                  }
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            );
          }

          if (page === currentPage - 2 || page === currentPage + 2) {
            return (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return null;
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              router.push(createPageUrl(Math.min(totalPages, currentPage + 1)))
            }
            aria-disabled={currentPage + 1 === totalPages}
            className={
              currentPage + 1 === totalPages
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CorePagination;
